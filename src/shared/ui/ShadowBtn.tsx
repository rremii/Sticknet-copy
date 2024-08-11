import { PropsWithChildren, ReactNode } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {
  onPress?: () => void
  icon?: ReactNode
}

export const ShadowBtn = ({ onPress, children, icon }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}
    >
      {icon ? icon : null}
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    padding: 7,
    borderRadius: 10,
    backgroundColor: '#1B1B1B',
    alignSelf: 'flex-start',
    shadowColor: '#867EF8',
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    color: '#fff',
  },
})
