import UserController from '../../controllers/user'
import UserValidator from '../../validators/user'
import { Router } from 'express'

const router = Router()

router.get('/:name', UserValidator.name, UserController.name)

export default router
