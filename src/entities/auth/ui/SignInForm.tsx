import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Controller, useForm } from 'react-hook-form'
import { TextInput, TouchableOpacity, View, Text } from 'react-native'
import { AuthNavigationParam } from 'src/app/navigation/types'
import { useLogin } from '../model/useLogin'
import { authFormStyles } from './authFormStyles'

interface FormValues {
  password: string
}

export const SignInForm = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthNavigationParam, 'SignIn'>>()
  const { params } = useRoute<RouteProp<AuthNavigationParam, 'SignIn'>>()

  const { control, handleSubmit, reset } = useForm<FormValues>()
  const { login } = useLogin()

  const onSubmit = async ({ password }: FormValues) => {
    if (!params.email) return

    const userCredential = await login({ email: params.email, password })

    reset({ password: '' })

    if (userCredential) {
      navigation.navigate('Root', { screen: 'Home' })
    }
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
            secureTextEntry={true}
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
  )
}
