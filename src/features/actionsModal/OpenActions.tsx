import React, { useState } from 'react'
import { ActionsModal } from './ActionsModal'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Overlay } from '../../shared/ui/Overlay'
import Home from './../../../assets/home.svg'
import { useModal } from '../../shared/moduls/modals/useModal'

export const OpenActions = () => {
  const { openModal } = useModal()

  const onPress = () => {
    openModal({ name: 'Actions', modal: ActionsModal })
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.openBtn}>
      <Text style={styles.textContent}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  openBtn: {
    width: 40,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    position: 'relative',
  },
  textContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -9 }, { translateY: -22 }],
    color: '#fff',
    fontSize: 30,
  },
})
