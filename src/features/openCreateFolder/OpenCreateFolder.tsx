import React, { FC, ReactNode } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  Button: ReactNode
}

export const OpenCreateFolder = ({ Button }: Props) => {
  const openCreateFolder = () => {}

  return (
    <TouchableOpacity onPress={openCreateFolder}>{Button}</TouchableOpacity>
  )
}
