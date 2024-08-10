import { auth } from 'firebase.config'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export const Home = () => {
  const user = auth.currentUser

  if (user) {
  }

  return (
    <View>
      <Text>{user?.displayName}</Text>
    </View>
  )
}
