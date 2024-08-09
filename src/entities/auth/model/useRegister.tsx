import { AuthError, createUserWithEmailAndPassword } from 'firebase/auth'
import { RegisterDto } from '../types'
import { auth } from 'firebase'
import { FirebaseError } from 'firebase/app'
import { useModal } from '@shared/moduls/modals/useModal'
import { getAuthError } from '../constants/authErrors'
import { Toast, ToastType } from '@shared/ui/Toast'
import { AuthNavigationParam } from 'src/app/navigation/types'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

export const useRegister = () => {
  const { openModal } = useModal()

  const register = ({ email, password }: RegisterDto) => {
    return createUserWithEmailAndPassword(auth, email, password).catch(
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
    register,
  }
}
