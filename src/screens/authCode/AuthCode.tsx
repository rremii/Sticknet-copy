import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthNavigationProps } from '../../app/navigation/types'
import { useNavigation } from '@react-navigation/native'

export const AuthCode = () => {
  const navigation = useNavigation<AuthNavigationProps>()

  const goToPassword = () => {
    navigation.navigate('Password')
  }

  return (
    <View>
      <Text>AuthCode</Text>
      <TouchableOpacity onPress={goToPassword}>
        <Text>go to password</Text>
      </TouchableOpacity>
    </View>
  )
}
