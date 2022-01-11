import registerValidator from './register.validator'
import loginValidator from './login.validator'

const AuthValidator = {
  register: registerValidator,
  login: loginValidator,
}

export default AuthValidator
