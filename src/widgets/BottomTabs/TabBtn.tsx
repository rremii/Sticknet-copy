import { PropsWithChildren } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {
  onPress: () => void
}

export const TabBtn = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
