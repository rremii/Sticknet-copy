import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '../../screens/home/Home'
import { Profile } from '../../screens/profile/Profile'
import { Vault } from '../../screens/vault/Vault'
import { Chats } from '../../screens/chats/Chats'
import { BottomTabs } from '../../widgets/BottomTabs/BottomTabs'

const Tab = createBottomTabNavigator()

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <BottomTabs {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Vault" component={Vault} />
        <Tab.Screen name="Settings" component={Chats} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
