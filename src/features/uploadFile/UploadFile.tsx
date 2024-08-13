import React, { FC, ReactNode } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  Button: ReactNode
}

export const UploadFile = ({ Button }: Props) => {
  const upload = () => {}

  return <TouchableOpacity onPress={upload}>{Button}</TouchableOpacity>
}
