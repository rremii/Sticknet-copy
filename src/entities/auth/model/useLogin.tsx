import { AuthError } from 'firebase/auth'
import { LoginDto } from '../types'
import { getAuthError } from '../constants/authErrors'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast, ToastType } from '@shared/ui/Toast'
import { auth } from 'firebase.config'

export const useLogin = () => {
  const { openModal } = useModal()

  const login = async ({ email, password }: LoginDto) => {
    return await auth
      .signInWithEmailAndPassword(email, password)
      .catch((error: AuthError) => {
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
      })
  }

  return {
    login,
  }
}
