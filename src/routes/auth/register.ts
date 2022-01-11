import AuthController from '../../controllers/auth'
import AuthValidator from '../../validators/auth'
import { Router } from 'express'

const router = Router()

router.post('/register', AuthValidator.register, AuthController.register)

export default router
