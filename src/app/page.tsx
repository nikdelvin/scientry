'use client'
import Face from '@material-symbols/svg-300/rounded/face.svg'
import Button from '@/components/ui/buttons/Button'
import { socketState } from '@/state'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import ButtonGroup from '@/components/ui/buttons/ButtonGroup'

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
                    { name: 'age', type: 'integer', required: false, unique: false },
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
        <div className="h-full bg-zinc-950 text-zinc-50">
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-2">
                <Button
                    color="primary"
                    haveAnimation={true}
                    haveShadow={true}
                    size="small"
                    onClick={updateCollection}
                >
                    <Face />
                    Update Collection
                </Button>
                <Button
                    color="secondary"
                    onClick={createEntry}
                >
                    Create entry
                </Button>
                <Button
                    color="success"
                    isDisabled={true}
                    onClick={updateEntry}
                >
                    Update entry
                </Button>
                <Button
                    color="error"
                    onClick={getEntry}
                    isLoading={true}
                >
                    Get entry
                </Button>
                <Button onClick={getEntries}>Get entries</Button>
                <Button
                    type="bordered"
                    color="primary"
                    size="large"
                    haveAnimation={true}
                    haveShadow={true}
                    isIconOnly={true}
                    onClick={updateCollection}
                >
                    <Face />
                </Button>
                <Button
                    type="bordered"
                    color="secondary"
                    onClick={createEntry}
                >
                    Create entry
                </Button>
                <Button
                    type="bordered"
                    color="success"
                    isDisabled={true}
                    onClick={updateEntry}
                >
                    Update entry
                </Button>
                <Button
                    type="bordered"
                    color="error"
                    isLoading={true}
                    onClick={getEntry}
                >
                    Get entry
                </Button>
                <Button
                    type="bordered"
                    onClick={getEntries}
                >
                    Get entries
                </Button>
                <ButtonGroup
                    color="primary"
                    haveAnimation={true}
                    haveShadow={true}
                    buttons={[
                        { content: 'Test 1' },
                        { content: 'Test 2', isDisabled: true },
                        { content: 'Test 3', isLoading: true }
                    ]}
                />
                <ButtonGroup
                    type="bordered"
                    color="primary"
                    haveAnimation={true}
                    haveShadow={true}
                    buttons={[
                        { content: 'Test 1' },
                        { content: 'Test 2', isDisabled: true },
                        { content: 'Test 3', isLoading: true }
                    ]}
                />
            </div>
        </div>
    )
}
