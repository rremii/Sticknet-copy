import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet, Dimensions, TextInput } from 'react-native'
import PasswordIcon from '@icons/key.svg'
import React, { useRef } from 'react'
import { SignUpForm } from '@entities/auth/ui/SignUpForm'

export const SignUp = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Come up with your password</Text>

      <View style={styles.icon}>
        <PasswordIcon stroke={'#867EF8'} width={40} height={40} />
      </View>

      <SignUpForm />
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
