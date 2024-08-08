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
import { AuthError } from 'firebase/auth'
import { getAuthError } from '@entities/auth/constants/authErrors'

interface FormValues {
  password: string
}

export const SignIn = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthNavigationParam, 'SignIn'>>()
  const { params } = useRoute<RouteProp<AuthNavigationParam, 'SignIn'>>()

  const { control, handleSubmit, reset } = useForm<FormValues>()
  const { login } = useLogin()

  const onSubmit = async ({ password }: FormValues) => {
    if (!params.email) return

    const userCredential = await login({ email: params.email, password })
    console.log(JSON.stringify(userCredential, null, 2))
    reset({ password: '' })
    if (userCredential) navigation.navigate('Root', { screen: 'Home' })
  }

  return (
    <View style={styles.page}>
      <Text style={authFormStyles.title}>Enter your password</Text>

      <View style={authFormStyles.icon}>
        <Email stroke={'#867EF8'} width={40} height={40} />
      </View>

      <View style={authFormStyles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="visible-password"
              keyboardAppearance="dark"
              placeholderTextColor={'#6F6F6F'}
              placeholder="Password"
              cursorColor={'#867EF8'}
              style={authFormStyles.input}
              onBlur={onBlur}
              onSubmitEditing={handleSubmit(onSubmit)}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={authFormStyles.submitBtn}
        >
          <Text style={authFormStyles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
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
})
