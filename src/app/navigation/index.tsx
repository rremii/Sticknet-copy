import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '../../screens/home/Home'
import { Profile } from '../../screens/profile/Profile'
import { Vault } from '../../screens/vault/Vault'
import { Chats } from '../../screens/chats/Chats'
import { BottomTabs } from '../../widgets/BottomTabs/BottomTabs'
import { AuthEmail } from '../../screens/authEmail/AuthEmail'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from '../../screens/signIn/SignIn'
import { SignUp } from '../../screens/signUp/SignUp'
import { AuthNavigationParam, RootNavigationParam } from './types'

const Tab = createBottomTabNavigator<RootNavigationParam>()
const AuthStack = createStackNavigator<AuthNavigationParam>()

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        initialParams={{ type: 'signIn' }}
        name="Email"
        component={AuthEmail}
      />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Root" component={RootNavigation} />
    </AuthStack.Navigator>
  )
}

const RootNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabs {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Vault" component={Vault} />
      <Tab.Screen name="Settings" component={Chats} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default AuthNavigation
