import React, { FC, ReactNode } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  Button: ReactNode
}

export const OpenCreateNote = ({ Button }: Props) => {
  const openCreateNote = () => {}

  return <TouchableOpacity onPress={openCreateNote}>{Button}</TouchableOpacity>
}
