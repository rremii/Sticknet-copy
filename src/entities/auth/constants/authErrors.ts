const authErrors = {
  'auth/email-already-in-use': 'Email already in use',
  'auth/invalid-email': 'Email or password is incorrect',
  'auth/operation-not-allowed': 'Operation not allowed',
  'auth/weak-password': 'Weak password',
  'auth/user-disabled': 'User disabled',
  'auth/user-not-found': 'User not found',
  'auth/wrong-password': 'Email or password is incorrect',
  'auth/invalid-credential': 'Email or password is incorrect',
  'auth/too-many-requests': 'Too many requests, try again later',
}

export const getAuthError = (code: string): string => {
  const message = authErrors[code]

  return message || 'Server error occurred'
}
