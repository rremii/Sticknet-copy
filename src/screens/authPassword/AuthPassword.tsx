import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  AuthNavigationProps,
  RootNavigationProps,
} from '../../app/navigation/types'

export const AuthPassword = () => {
  const navigation = useNavigation<AuthNavigationProps>()

  const goToRoot = () => {
    navigation.navigate('Root', {
      screen: 'Home',
    })
  }

  return (
    <View>
      <Text>AuthPassword</Text>
      <TouchableOpacity onPress={goToRoot}>
        <Text>go to root</Text>
      </TouchableOpacity>
    </View>
  )
}
