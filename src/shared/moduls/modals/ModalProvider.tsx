import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react'
import {
  addModal,
  closeModal,
  initialState,
  ModalContext,
  ModalReducer,
  removeModal,
} from './modalStore'
import { ModalNames, RegisterModal } from './types'
import { useModal } from './useModal'

interface Props extends PropsWithChildren {}

export const ModalProvider: FC<Props> = ({ children }) => {
  const [modalState, dispatch] = useReducer(ModalReducer, initialState)

  return (
    <ModalContext.Provider value={{ modals: modalState.modals, dispatch }}>
      {modalState.modals.map(({ modal: Modal, name, isOpen, props }) => {
        return <Modal key={name} name={name} isOpen={isOpen} {...props} />
      })}

      {children}
    </ModalContext.Provider>
  )
}
