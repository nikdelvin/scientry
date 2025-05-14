import { create } from 'zustand'
import { Socket } from 'socket.io-client'

interface ZustandStore {
    socketState: Socket | undefined
    fieldsState: SciField.Settings[]
    setSocketState: (socketState: Socket) => void
    setFieldsState: (fieldsState: SciField.Settings[]) => void
}

const useStore = create<ZustandStore>((set) => ({
    socketState: undefined,
    fieldsState: [],
    setSocketState: (socketState) => set(() => ({ socketState: socketState })),
    setFieldsState: (fieldsState) => set(() => ({ fieldsState: fieldsState }))
}))

export { useStore }
