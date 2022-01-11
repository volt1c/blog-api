import { Router } from 'express'
import passport from 'passport'
import AuthController from '../../controllers/auth'
import AuthValidator from '../../validators/auth'

const router = Router()

router.post(
  '/login',
  AuthValidator.login,
  passport.authenticate('local', { session: false }),
  AuthController.login
)

export default router
