import { CompleteAssistant } from "./Assistant"

export interface ModalsTypes {
    isOpen1: boolean
    onClose1: () => void
}

export interface ModalsDeleteTypes {
    isOpenDelete: boolean
    isCloseDelete: () => void
    id: string
}

export interface EditTypes {
    isEditOpen: boolean
    isCloseEdit: () => void
    agentInfo: CompleteAssistant
}
