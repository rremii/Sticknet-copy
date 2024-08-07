import { View, Text, TouchableOpacity } from 'react-native'
import { AuthNavigationProps } from '../../app/navigation/types'
import { useNavigation } from '@react-navigation/native'

export const AuthEmail = () => {
  const navigation = useNavigation<AuthNavigationProps>()

  const goToCode = () => {
    navigation.navigate('Code')
  }

  return (
    <View>
      <Text>AuthEmail</Text>
      <TouchableOpacity onPress={goToCode}>
        <Text>go to code</Text>
      </TouchableOpacity>
    </View>
  )
}
