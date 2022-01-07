import AuthController from 'controllers/auth'
import AuthValidator from 'validators/auth'
import { Router } from 'express'

const router = Router()

router.post(
  '/register',
  AuthValidator.registerValidator,
  AuthController.register
)

export default router
