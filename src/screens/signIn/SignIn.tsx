import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { AuthNavigationParam } from '../../app/navigation/types'
import Email from '@icons/mail.svg'
import { useForm, Controller, SubmitErrorHandler } from 'react-hook-form'
import { StackNavigationProp } from '@react-navigation/stack'
import { authFormStyles } from '@shared/ui/authFormStyles'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast, ToastType } from '@shared/ui/Toast'
import { useLogin } from '@entities/auth/model/useLogin'
import { LoginDto } from '@entities/auth/types'
import { AuthError, User } from 'firebase/auth'
import { getAuthError } from '@entities/auth/constants/authErrors'
import { auth } from 'firebase'
import { SignInForm } from '@entities/auth/ui/SignInForm'

export const SignIn = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Enter your password</Text>
      <View style={styles.icon}>
        <Email stroke={'#867EF8'} width={40} height={40} />
      </View>
      <SignInForm />
    </View>
  )
}
const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#1A1A1A',
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: '#867EF8',
    borderWidth: 1,
    borderRadius: 40,

    width: 80,
    height: 80,
  },
})
