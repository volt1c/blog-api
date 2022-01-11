import loginController from './login.controller'
import registerController from './register.controller'

const AuthController = {
  register: registerController,
  login: loginController,
}
export default AuthController
