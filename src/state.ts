import { atom } from 'recoil'
import { Socket } from 'socket.io-client'
import { FieldSettings } from './utils/configs/fields'

const socketState = atom<Socket | undefined>({
    key: 'socketState',
    default: undefined,
    dangerouslyAllowMutability: true
})

const fieldsState = atom<FieldSettings[]>({
    key: 'fieldsState',
    default: []
})

export { socketState, fieldsState }
