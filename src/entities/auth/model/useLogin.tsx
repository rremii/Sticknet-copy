import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { LoginDto, RegisterDto } from '../types'
import { auth } from 'firebase'
import { FirebaseError } from 'firebase/app'
import { getAuthError } from '../constants/authErrors'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast, ToastType } from '@shared/ui/Toast'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthNavigationParam } from 'src/app/navigation/types'

export const useLogin = () => {
  const { openModal } = useModal()

  const login = async ({ email, password }: LoginDto) => {
    return await signInWithEmailAndPassword(auth, email, password).catch(
      (error: AuthError) => {
        const errorMessage = getAuthError(error.code)

        openModal<{
          type: ToastType
          children: string
        }>(
          {
            modal: Toast,
            name: 'Toast',
            props: {
              type: 'error',
              children: errorMessage,
            },
          },
          3000,
        )
      },
    )
  }

  return {
    login,
  }
}
