'use client'
import { NextUIProvider } from '@nextui-org/react'
import io from 'socket.io-client'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { socketState } from '../state'

const SocketRoot = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    const setSocket = useSetRecoilState(socketState)
    useEffect(() => {
        const socketIO = io({ path: '/api/ws' })
        socketIO.on('connect', () => {
            setSocket(socketIO)
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
        <RecoilRoot>
            <NextUIProvider>
                <SocketRoot>
                    <main className="select-none overflow-hidden">
                        <div className="flex h-screen w-screen flex-col overflow-y-scroll">{children}</div>
                    </main>
                </SocketRoot>
            </NextUIProvider>
        </RecoilRoot>
    )
}
