import { atom } from 'recoil'
import { Socket } from 'socket.io-client'

const socketState = atom<Socket | undefined>({
    key: 'socketState',
    default: undefined,
    dangerouslyAllowMutability: true
})

const fieldsState = atom<SciField.Settings[]>({
    key: 'fieldsState',
    default: []
})

export { socketState, fieldsState }
