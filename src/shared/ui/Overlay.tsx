import { Children, PropsWithChildren, useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  Dimensions,
  Modal,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native'

interface Props {
  isActive: boolean
  onPress: () => void
  backgroundColor?: string
  startDuration?: number
  endDuration?: number
  zIndex?: number
}

export const Overlay = ({
  isActive,
  onPress,
  backgroundColor = 'rgba(0, 0, 0, 0.5)',
  startDuration = 300,
  endDuration = 300,
  zIndex = 1,
}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (isActive) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: startDuration,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: endDuration,
        useNativeDriver: true,
      }).start()
    }
  }, [isActive])

  return (
    <>
      <Animated.View
        style={[
          styles.fullScreen,
          {
            pointerEvents: isActive ? 'auto' : 'none',
            zIndex,
            backgroundColor,
            opacity: fadeAnim,
          },
        ]}
      ></Animated.View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.fullScreen,
          {
            zIndex,
            pointerEvents: isActive ? 'auto' : 'none',
          },
        ]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
})
