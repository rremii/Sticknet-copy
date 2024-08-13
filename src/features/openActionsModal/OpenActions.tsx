import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { useModal } from '../../shared/moduls/modals/useModal'
import { ActionsModal } from '@features/actionsModal/ActionsModal'

export const OpenActions = () => {
  const { openModal } = useModal()

  const onPress = () => {
    openModal({ name: 'Actions', modal: ActionsModal })
  }

  // TODO: add icon
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.openBtn}
    >
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    height: 40,
    width: 40,
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  },
})
