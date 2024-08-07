import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '../../screens/home/Home'
import { Profile } from '../../screens/profile/Profile'
import { Vault } from '../../screens/vault/Vault'
import { Chats } from '../../screens/chats/Chats'
import { BottomTabs } from '../../widgets/BottomTabs/BottomTabs'
import { AuthEmail } from '../../screens/authEmail/AuthEmail'
import { AuthCode } from '../../screens/authCode/AuthCode'
import { AuthPassword } from '../../screens/authPassword/AuthPassword'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator()
const AuthStack = createStackNavigator()

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Email" component={AuthEmail} />
      <AuthStack.Screen name="Code" component={AuthCode} />
      <AuthStack.Screen name="Password" component={AuthPassword} />
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
