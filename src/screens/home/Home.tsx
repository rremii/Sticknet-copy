import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
  const navigation = useNavigation()

  const goToProfile = () => {
    navigation.navigate('Profile')
  }

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={goToProfile}>
        <Text>go to profile</Text>
      </TouchableOpacity>
    </View>
  )
}
