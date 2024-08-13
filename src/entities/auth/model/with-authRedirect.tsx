// import { useTypedSelector } from "@shared/hooks/storeHooks.ts"
// import { FC, useEffect } from "react"
// import { useNavigate } from "react-router-dom"

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { auth } from 'firebase.config'
import { FC, useEffect } from 'react'
import { AuthNavigationParam } from 'src/app/navigation/types'

export const withAuthRedirect = (Component: FC) => (props) => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  useEffect(() => {
    if (!auth.currentUser) {
      navigation.navigate('Email', { type: 'signIn' })
    } else navigation.navigate('Root', { screen: 'Home' })
  }, [])

  return <Component {...props} />
}
