import compose from 'compose-function'
import { withNavigation } from './with-navigation'
import { withAuthRedirect } from '@entities/auth/model/with-authRedirect'

export const withProviders = compose(withNavigation, withAuthRedirect)
