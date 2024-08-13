import { Dimensions, StyleSheet } from 'react-native'

export const authFormStyles = StyleSheet.create({
  form: {
    display: 'flex',
    gap: 10,
  },
  input: {
    paddingLeft: 20,
    height: 50,
    color: '#867EF8',
    width: Dimensions.get('window').width * 0.9,
    borderWidth: 1,
    borderColor: '#1A1A44',
    borderRadius: 10,
    fontSize: 16,
  },

  submitBtn: {
    width: Dimensions.get('window').width * 0.9,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#1A1A44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  error: {
    color: '#a40101',
    fontSize: 12,
  },
})
