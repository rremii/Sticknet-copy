import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

interface IAnimationParams {
  initValue: number
  isActive: boolean
  active: {
    duration?: number
    value: number
    delay?: number
  }
  notActive: {
    duration?: number
    value: number
    delay?: number
  }
}

const defaultDuration = 300
export const useAnimatedValue = ({
  isActive,
  active,
  notActive,
  initValue,
}: IAnimationParams) => {
  const animValue = useRef(new Animated.Value(initValue)).current

  useEffect(() => {
    if (isActive) {
      Animated.timing(animValue, {
        toValue: active.value,
        duration: active.duration || defaultDuration,
        delay: active.delay || 0,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(animValue, {
        toValue: notActive.value,
        duration: notActive.duration || defaultDuration,
        delay: notActive.delay || 0,
        useNativeDriver: true,
      }).start()
    }
  }, [isActive])

  return animValue
}
