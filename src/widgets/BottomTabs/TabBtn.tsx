import { PropsWithChildren } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import Home from '@icons/home.svg'
import { SvgProps } from 'react-native-svg'

interface Props extends PropsWithChildren {
  onPress?: () => void
  Icon: React.FC<SvgProps>
  isActive: boolean
}

export const TabBtn = ({ onPress, children, Icon, isActive }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={onPress}
    >
      <Icon width={25} height={25} color={isActive ? '#867EF8' : '#fff'} />
      <Text
        style={[styles.textContent, { color: isActive ? '#867EF8' : '#fff' }]}
      >
        {children}
      </Text>
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
