import { Router } from 'express'
import UserController from '../../controllers/user'
import UserValidator from '../../validators/user'

const router = Router()

router.get('/name/:name', UserValidator.name, UserController.name)

export default router
