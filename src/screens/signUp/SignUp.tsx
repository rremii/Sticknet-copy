import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthNavigationParam } from '../../app/navigation/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast, ToastType } from '@shared/ui/Toast'
import { useForm, Controller, SubmitErrorHandler, set } from 'react-hook-form'
import { authFormStyles } from '@shared/ui/authFormStyles'
import { StyleSheet, Dimensions, TextInput } from 'react-native'
import Email from '@icons/mail.svg'
import { useRef } from 'react'
import { useRegister } from '@entities/auth/model/useRegister'
import { FirebaseError } from 'firebase/app'
import { AuthError } from 'firebase/auth'
import { getAuthError } from '@entities/auth/constants/authErrors'

interface FormValues {
  password: string
  confirmPassword: string
}

export const SignUp = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthNavigationParam, 'SignUp'>>()
  const { params } = useRoute<RouteProp<AuthNavigationParam, 'SignUp'>>()

  const { register } = useRegister()
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormValues>()
  const confirmPasswordRef = useRef<TextInput | null>(null)

  const onSubmit = async ({ confirmPassword, password }: FormValues) => {
    if (!params.email) return

    if (password !== confirmPassword)
      return setError('confirmPassword', { type: 'notEqual' })

    const userCredential = await register({ password, email: params.email })

    reset({ password: '', confirmPassword: '' })
    if (userCredential) navigation.navigate('Root', { screen: 'Home' })
  }

  const setFocus = () => {
    confirmPasswordRef.current?.focus()
  }

  return (
    <View style={styles.page}>
      <Text style={authFormStyles.title}>Come up with your password</Text>

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
              onSubmitEditing={setFocus}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              ref={confirmPasswordRef}
              keyboardType="visible-password"
              keyboardAppearance="dark"
              placeholderTextColor={'#6F6F6F'}
              placeholder="Confirm Password"
              cursorColor={'#867EF8'}
              style={authFormStyles.input}
              onBlur={onBlur}
              onSubmitEditing={handleSubmit(onSubmit)}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text style={authFormStyles.error}>
            {(errors.confirmPassword.type === 'required' &&
              'Passwords are required') ||
              'Passwords do not match'}
          </Text>
        )}

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
