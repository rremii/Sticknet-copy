import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react'
import { initialState, ModalContext, ModalReducer } from './modalStore'
import { ModalNames, RegisterModal } from './types'

interface Props extends PropsWithChildren {
  modals: RegisterModal[]
}

export const ModalProvider: FC<Props> = ({ children, modals }) => {
  const [modalState, dispatch] = useReducer(ModalReducer, initialState)

  useEffect(() => {
    modals.forEach(({ modal, name }) => {
      dispatch({ type: 'register', payload: { modal, name } })
    })
  }, [modals])

  const closeModal = (name: ModalNames) => {
    dispatch({ type: 'close', payload: name })
  }

  return (
    <ModalContext.Provider value={{ modals: modalState.modals, dispatch }}>
      {modalState.modals.map(({ modal: Modal, name, isOpen }) => {
        if (isOpen)
          return (
            <Modal
              closeModal={() => closeModal(name)}
              key={name}
              name={name}
              isOpen={isOpen}
            />
          )
      })}

      {children}
    </ModalContext.Provider>
  )
}
