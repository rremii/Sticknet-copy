import RootNavigation from './src/app/navigation'
import { AppLayout } from './src/app/layout/AppLayout'
import { withNavigation } from './src/app/providers/with-navigation'
import { View, Text } from 'react-native'
import { withAuthRedirect } from '@entities/auth/model/with-authRedirect'
import { withProviders } from 'src/app/providers/with-providers'

function App() {
  return (
    <AppLayout>
      <RootNavigation />
    </AppLayout>
  )
}

export default withProviders(App)
