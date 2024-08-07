import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import RootNavigation from './src/app/navigation'
import { AppLayout } from './src/app/layout/AppLayout'
import { withNavigation } from './src/app/providers/with-navigation'

function App() {
  return (
    <AppLayout>
      <RootNavigation />
    </AppLayout>
  )
}

export default withNavigation(App)
