import { FC, useEffect, useRef, useState } from 'react'
import { Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { ModalProps } from '../../shared/moduls/modals/types'
import { Overlay } from '../../shared/ui/Overlay'
import { useModal } from '../../shared/moduls/modals/useModal'
import { useAnimatedValue } from '@shared/model/useAnimatedValue'

interface Props extends ModalProps {}

export const ActionsModal: FC<Props> = ({ isOpen, name }) => {
  const { closeModal } = useModal()

  const slideAnim = useAnimatedValue({
    initValue: 500,
    isActive: isOpen,
    active: {
      value: 0,
    },
    inActive: {
      value: 500,
    },
  })

  return (
    <>
      <Overlay isActive={isOpen} onPress={() => closeModal(name, 500)} />
      <Animated.View
        style={[styles.modal, { transform: [{ translateY: slideAnim }] }]}
      >
        <Text>Modal</Text>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  modal: {
    bottom: 0,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: Dimensions.get('window').width,
    height: 500,
  },
})
