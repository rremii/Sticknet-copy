import RootNavigation from './src/app/navigation'
import { AppLayout } from './src/app/layout/AppLayout'
import { withNavigation } from './src/app/providers/with-navigation'
import { View, Text } from 'react-native'

function App() {
  return (
    <AppLayout>
      <RootNavigation />
    </AppLayout>
  )
}

export default withNavigation(App)
