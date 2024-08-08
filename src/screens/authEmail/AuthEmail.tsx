import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { AuthNavigationParam } from '../../app/navigation/types'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import Email from '@icons/mail.svg'
import { useForm, Controller, SubmitErrorHandler } from 'react-hook-form'
import { StackNavigationProp } from '@react-navigation/stack'
import { authFormStyles } from '@shared/ui/authFormStyles'
import { auth } from 'firebase'
import { getAuth } from 'firebase/auth'

interface FormValues {
  email: string
}

export const AuthEmail = () => {
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

  const redirect = () => {
    const { type } = params
    reset({ email: '' })
    if (type === 'signIn') {
      navigation.navigate('Email', { type: 'signUp' })
    }
    if (type === 'signUp') {
      navigation.navigate('Email', { type: 'signIn' })
    }
  }

  return (
    <View style={styles.page}>
      <Text style={authFormStyles.title}>
        {params.type === 'signIn'
          ? 'Sign in with yuor email'
          : 'Sign up with yuor email'}
      </Text>
      <View style={authFormStyles.icon}>
        <Email stroke={'#867EF8'} width={40} height={40} />
      </View>
      <View style={authFormStyles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
      <TouchableOpacity onPress={redirect}>
        <Text style={styles.redirectLink}>
          {params.type === 'signIn'
            ? 'Dont have an account?'
            : 'Already have an account?'}
        </Text>
      </TouchableOpacity>
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

  redirectLink: {
    color: '#fefefe',
    fontSize: 14,
  },
})
