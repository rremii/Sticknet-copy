import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native'
import { useRef } from 'react'
import { useRegister } from '@entities/auth/model/useRegister'
import { AuthNavigationParam } from 'src/app/navigation/types'
import { authFormStyles } from './authFormStyles'

interface FormValues {
  password: string
  confirmPassword: string
}

export const SignUpForm = () => {
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

  const onSubmit = async ({ confirmPassword, password }: FormValues) => {
    if (!params.email) return

    if (password !== confirmPassword)
      return setError('confirmPassword', { type: 'notEqual' })

    const userCredential = await register({ password, email: params.email })

    reset({ password: '', confirmPassword: '' })
    if (userCredential) {
      console.log(JSON.stringify(userCredential))

      navigation.navigate('Root', { screen: 'Home' })
    }
  }

  const confirmPasswordRef = useRef<TextInput | null>(null)
  const setFocus = () => {
    confirmPasswordRef.current?.focus()
  }
  return (
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
        <Text style={authFormStyles.btnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}
