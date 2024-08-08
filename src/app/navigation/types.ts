import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootNavigationParam = {
  Home: undefined
  Vault: undefined
  Settings: undefined
  Profile: undefined
}

// export type RootNavigationProps<T> = BottomTabNavigationProp<
//   RootNavigationParam,
//   T extends keyof RootNavigationParam ? T : never
// >

export type AuthNavigationParam = {
  Email: { type: 'signIn' | 'signUp' }
  SignIn: { email: string }
  SignUp: { email: string }
  Root: NavigatorScreenParams<RootNavigationParam>
}

// export type AuthNavigationProps<T> = StackNavigationProp<
//   AuthNavigationParam,
//   T extends keyof AuthNavigationParam ? T : never
// >
