import { FC } from 'react'

export type ModalNames = 'Actions'

export interface IModal {
  isOpen: boolean
  modal: FC<ModalProps>
  name: ModalNames
}

export interface ModalProps {
  name: ModalNames
  isOpen: boolean
  closeModal: () => void
}

type Action<T, P> = {
  type: T
  payload: P
}

export interface RegisterModal {
  modal: FC<ModalProps>
  name: ModalNames
}
type RegisterModalAction = Action<'register', RegisterModal>
type OpenModalAction = Action<'open', ModalNames>
type CloseModalAction = Action<'close', ModalNames>

export type ModalAction =
  | RegisterModalAction
  | OpenModalAction
  | CloseModalAction
