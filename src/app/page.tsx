'use client'

import { socketState } from '@/state'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react'
import SchemaForm from '@/components/forms/SchemaForm'

export default function Home() {
    const socket = useRecoilValue(socketState)
    function updateCollection() {
        socket?.emit('task', {
            type: 'updateCollection',
            payload: {
                collection: 'users',
                data: [
                    { name: 'email', type: 'string', required: true, unique: true },
                    { name: 'phone', type: 'string', required: true, unique: true },
                    { name: 'firstName', type: 'string', required: false, unique: false },
                    { name: 'lastName', type: 'string', required: false, unique: false },
                    { name: 'age', type: 'number', required: false, unique: false },
                    { name: 'passport', type: 'string', required: true, unique: true, validate: '^d{6}$' },
                    { name: 'test', type: 'string', required: false, unique: false, default: '777' }
                ]
            }
        })
    }
    function createEntry() {
        socket?.emit('task', {
            type: 'createEntry',
            payload: {
                collection: 'users',
                data: {
                    email: 'erter9.live@gmail.com',
                    phone: '+971503172749',
                    firstName: 'Nikita',
                    lastName: 'Stadnik',
                    age: 25,
                    passport: '6666678'
                }
            }
        })
    }
    function updateEntry() {
        socket?.emit('task', {
            type: 'updateEntry',
            payload: {
                collection: 'users',
                id: 99,
                data: {
                    email: 'projects2@bso.ae',
                    age: 30
                }
            }
        })
    }
    function getEntry() {
        socket?.emit('task', {
            type: 'getEntry',
            payload: {
                collection: 'users',
                id: 99
            }
        })
    }
    function getEntries() {
        socket?.emit('task', {
            type: 'getEntries',
            payload: {
                collection: 'users'
            }
        })
    }
    useEffect(() => {
        if (socket?.id != null) {
            socket?.on('task-result', ({ result }) => {
                console.log(result)
            })
        }
    }, [socket])

    return (
        <div className="grid grid-cols-2 grid-flow-row gap-4 p-4">
            <SchemaForm />
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>CEO</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>Zoey Lang</TableCell>
                        <TableCell>Technical Lead</TableCell>
                        <TableCell>Paused</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>Jane Fisher</TableCell>
                        <TableCell>Senior Developer</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>William Howard</TableCell>
                        <TableCell>Community Manager</TableCell>
                        <TableCell>Vacation</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="hidden flex-col w-full h-full justify-center items-center bg-zinc-50 text-zinc-950 opacity-90 ">
                <button onClick={updateCollection}>Update Collection</button>
                <button onClick={createEntry}>Create entry</button>
                <button onClick={updateEntry}>Update entry</button>
                <button onClick={getEntry}>Get entry</button>
                <button onClick={getEntries}>Get entries</button>
            </div>
        </div>
    )
}
