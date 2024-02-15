'use client'

import { socketState } from '@/state'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import SchemaForm from '@/components/forms/SchemaForm'
import List from '@/components/menu/List'
import ModelsList from '@/components/menu/ModelsList'

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
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,5fr)] gap-4 p-4 h-full">
            <List/>
            <ModelsList/>
            <SchemaForm />
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
