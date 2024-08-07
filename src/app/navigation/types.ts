import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'

type RootNavigationParam = {
  Home: undefined
  Vault: undefined
  Settings: undefined
  Profile: undefined
}

export type RootNavigationProps = BottomTabNavigationProp<RootNavigationParam>

type AuthNavigationParam = {
  Email: undefined
  Code: undefined
  Password: undefined
  Root: RootNavigationProps
}

export type AuthNavigationProps = StackNavigationProp<AuthNavigationParam>
