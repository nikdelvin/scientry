'use client'
import { HeroUIProvider } from '@heroui/react'
import io from 'socket.io-client'
import { useEffect } from 'react'
import { useStore } from '../state'

const SocketRoot = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    const setSocketState = useStore((state) => state.setSocketState)
    useEffect(() => {
        const socketIO = io({ path: '/api/ws' })
        socketIO.on('connect', () => {
            setSocketState(socketIO)
        })
    }, [])
    return children
}

export default function Main({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <HeroUIProvider>
            <SocketRoot>
                <main className="select-none overflow-hidden">
                    <div className="flex h-screen w-screen flex-col overflow-y-scroll">{children}</div>
                </main>
            </SocketRoot>
        </HeroUIProvider>
    )
}
