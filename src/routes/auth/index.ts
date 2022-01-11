import { Router } from 'express'
import AuthController from '../../controllers/auth'
import passport from 'passport'
import AuthValidator from '../../validators/auth'

const router = Router()

router.post('/register', AuthValidator.register, AuthController.register)
router.post(
  '/login',
  AuthValidator.login,
  passport.authenticate('local', { session: false }),
  AuthController.login
)

export default router
