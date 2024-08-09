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
import React from 'react'
import { EmailForm } from '@entities/auth/ui/EmailForm'

export const AuthEmail = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthNavigationParam, 'SignIn'>>()
  const { params } = useRoute<RouteProp<AuthNavigationParam, 'Email'>>()

  const redirect = () => {
    const { type } = params
    if (type === 'signIn') {
      navigation.navigate('Email', { type: 'signUp' })
    }
    if (type === 'signUp') {
      navigation.navigate('Email', { type: 'signIn' })
    }
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>
        {params.type === 'signIn'
          ? 'Sign in with your email'
          : 'Sign up with your email'}
      </Text>
      <View style={styles.icon}>
        <Email stroke={'#867EF8'} width={40} height={40} />
      </View>

      <EmailForm />

      <TouchableOpacity onPress={redirect}>
        <Text style={styles.redirectLink}>
          {params.type === 'signIn'
            ? "Don't have an account?"
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
  redirectLink: {
    color: '#fefefe',
    fontSize: 14,
  },
})
