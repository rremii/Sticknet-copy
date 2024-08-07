import { PropsWithChildren } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import Home from './../../../assets/home.svg'

interface Props extends PropsWithChildren {
  onPress: () => void
}

export const TabBtn = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Home width={25} height={25} fill={'#fff'} />

      <Text style={styles.textContent}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textContent: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
