import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import Email from '@icons/mail.svg'
import { useForm, Controller, SubmitErrorHandler } from 'react-hook-form'
import { StackNavigationProp } from '@react-navigation/stack'
import { auth } from 'firebase'
import { getAuth } from 'firebase/auth'
import { AuthNavigationParam } from 'src/app/navigation/types'
import { emailRegexPattern } from '../constants/regex'
import { authFormStyles } from './authFormStyles'

interface FormValues {
  email: string
}

export const EmailForm = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthNavigationParam, 'SignIn'>>()
  const { params } = useRoute<RouteProp<AuthNavigationParam, 'Email'>>()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = ({ email }: FormValues) => {
    reset({ email: '' })
    if (params.type === 'signIn') navigation.navigate('SignIn', { email })
    if (params.type === 'signUp') navigation.navigate('SignUp', { email })
  }

  return (
    <View style={authFormStyles.form}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: emailRegexPattern,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="email-address"
            keyboardAppearance="dark"
            placeholderTextColor={'#6F6F6F'}
            placeholder="Your email"
            cursorColor={'#867EF8'}
            style={authFormStyles.input}
            onBlur={onBlur}
            onSubmitEditing={handleSubmit(onSubmit)}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={authFormStyles.error}>
          {(errors.email.type === 'required' && 'Email is required') ||
            'Invalid email'}
        </Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={authFormStyles.submitBtn}
      >
        <Text style={authFormStyles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}
