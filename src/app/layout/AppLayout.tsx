import { FC, PropsWithChildren, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  UIManager,
  Platform,
  LayoutAnimation,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { ModalProvider } from '../../shared/moduls/modals/ModalProvider'
import { ModalProps, RegisterModal } from '../../shared/moduls/modals/types'
import { useModal } from '../../shared/moduls/modals/useModal'
import { ActionsModal } from '../../features/actionsModal/ActionsModal'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthNavigationParam } from '../navigation/types'

interface Props extends PropsWithChildren {}
export const AppLayout: FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets()

  const { bottom, left, right, top } = insets

  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  useEffect(() => {
    navigation.navigate('Email')
  }, [navigation])

  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      // UIManager.setLayoutAnimationEnabledExperimental(true)
      // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    }
  }, [])

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
      <ModalProvider>{children}</ModalProvider>
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
