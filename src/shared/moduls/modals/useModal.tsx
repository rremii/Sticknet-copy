import { FC, useContext, useEffect } from 'react'
import { Modal, ModalProps } from 'react-native'
import { ModalContext } from './modalStore'
import { ModalNames } from './types'

export const useModal = () => {
  const { dispatch } = useContext(ModalContext)

  const openModal = (name: ModalNames) => {
    dispatch({ type: 'open', payload: name })
  }

  const closeModal = (name: ModalNames) => {
    dispatch({ type: 'close', payload: name })
  }

  return { openModal, closeModal }
}
