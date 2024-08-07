import { createContext } from 'react'
import { IModal, ModalAction } from './types'

interface InitialState {
  modals: IModal[]
}

export const initialState: InitialState = {
  modals: [],
}

export const ModalContext = createContext<
  InitialState & { dispatch: React.Dispatch<ModalAction> }
>({ modals: [], dispatch: (action: ModalAction) => {} })

export const ModalReducer = (
  state: InitialState,
  action: ModalAction,
): InitialState => {
  switch (action.type) {
    case 'register': {
      const { modal, name } = action.payload

      if (state.modals.find((modal) => modal.name === name)) return state

      return {
        ...state,
        modals: [...state.modals, { modal, name, isOpen: false }],
      }
    }
    case 'open':
      return {
        ...state,
        modals: state.modals.map((modal) => {
          if (modal.name === action.payload) {
            return { ...modal, isOpen: true }
          }
          return modal
        }),
      }
    case 'close':
      return {
        ...state,
        modals: state.modals.map((modal) => {
          if (modal.name === action.payload) {
            return { ...modal, isOpen: false }
          }
          return modal
        }),
      }
    default:
      return state
  }
}
