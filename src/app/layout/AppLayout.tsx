import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {}

export const AppLayout: FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets()

  const { bottom, left, right, top } = insets

  return (
    <View
      style={
        styles({
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
          paddingTop: top,
        }).pageLayout
      }
    >
      {children}
    </View>
  )
}

const styles = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: {
  paddingTop: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
}) =>
  StyleSheet.create({
    pageLayout: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#fff',
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
    },
  })
