import { Server, ServerOptions } from 'socket.io'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Sequelize, DataTypes } from 'sequelize'
import cors from 'cors'
import { FieldSettings, getType } from '@/utils/configs/fields'

interface IOSocket {
    server: Partial<ServerOptions> & { io: Server }
}

const corsMiddleware = cors()

function getError(e: any, notFound?: true) {
    if (notFound) return { error: { message: 'Entry not found' } }
    const message = (() => {
        switch (e.errors[0].validatorKey) {
            case 'is_null':
                return 'Field must be not empty'
            case 'not_unique':
                return 'Field must be unique'
            case 'is':
                return `Field must be match this RegExp: ${e.errors[0].validatorArgs}`
            default:
                return 'Field must be valid'
        }
    })()
    return {
        error: { field: e.errors[0].path, message }
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if ((res.socket as never as IOSocket).server.io) {
        res.end()
        return
    }
    const io = new Server((res.socket as never as IOSocket).server, {
        path: '/api/ws',
        addTrailingSlash: false
    })
    io.on('connection', async (socket) => {
        console.log(`Socket ${socket.id} connected.`)
        socket.on('task', async ({ type, payload }) => {
            const sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: './scientry.db',
                logging: false
            })
            const Collection = sequelize.define('collections', {
                name: { type: DataTypes.STRING },
                fields: { type: DataTypes.TEXT }
            })
            async function getModel(collectionName: string) {
                const collection = (
                    await Collection.findAll({
                        where: {
                            name: collectionName
                        }
                    })
                )[0].dataValues
                const modelSchema = Object.fromEntries(
                    JSON.parse(collection.fields).map((field: FieldSettings) => [
                        field.name,
                        {
                            type: getType(field.type),
                            allowNull: !field.required,
                            unique: field.unique,
                            defaultValue: field.default,
                            validate: field.validate
                                ? {
                                      is: new RegExp(field.validate, 'i')
                                  }
                                : undefined
                        }
                    ])
                )
                const model = sequelize.define(payload.collection, modelSchema)
                return model
            }
            if (type === 'updateCollection') {
                const modelSchema = Object.fromEntries(
                    payload.data.map((field: FieldSettings) => [
                        field.name,
                        {
                            type: getType(field.type),
                            allowNull: !field.required,
                            unique: field.unique,
                            defaultValue: field.default,
                            validate: field.validate
                                ? {
                                      is: new RegExp(field.validate, 'i')
                                  }
                                : undefined
                        }
                    ])
                )
                const model = sequelize.define(payload.collection, modelSchema)
                await sequelize.sync({ alter: true })
                const collections = await Collection.findAll({
                    where: {
                        name: payload.collection
                    }
                })
                if (collections.length === 0) {
                    await Collection.create({ name: payload.collection, fields: JSON.stringify(payload.data) })
                } else {
                    await collections[0].update({ name: payload.collection, fields: JSON.stringify(payload.data) })
                }
                io.emit('task-result', { result: model })
            }
            if (type === 'createEntry') {
                const model = await getModel(payload.collection)
                try {
                    const result = (await model.create(payload.data)).dataValues
                    io.emit('task-result', { result })
                } catch (e) {
                    io.emit('task-result', { result: getError(e) })
                }
            }
            if (type === 'updateEntry') {
                const model = await getModel(payload.collection)
                try {
                    await model.update(payload.data, {
                        where: {
                            id: payload.id
                        }
                    })
                    const result = await model.findAll({
                        where: {
                            id: payload.id
                        }
                    })
                    if (result.length > 0) io.emit('task-result', { result: result[0].dataValues })
                    else io.emit('task-result', { result: getError({}, true) })
                } catch (e) {
                    io.emit('task-result', { result: getError(e) })
                }
            }
            if (type === 'getEntry') {
                const model = await getModel(payload.collection)
                try {
                    const result = await model.findAll({
                        where: {
                            id: payload.id
                        }
                    })
                    if (result.length > 0) io.emit('task-result', { result: result[0].dataValues })
                    else io.emit('task-result', { result: getError({}, true) })
                } catch (e) {
                    console.log(e)
                    io.emit('task-result', { result: getError(e) })
                }
            }
            if (type === 'getEntries') {
                const model = await getModel(payload.collection)
                const result = (await model.findAll()).map((entry) => entry.dataValues)
                io.emit('task-result', { result })
            }
        })
        socket.on('disconnect', () => {
            console.log(`Socket ${socket.id} disconnected.`)
        })
    })
    corsMiddleware(req, res, () => {
        ;(res.socket as never as IOSocket).server.io = io
        res.end()
        return
    })
}
