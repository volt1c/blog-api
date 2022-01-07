import UserController from 'controllers/user'
import UserValidator from 'validators/user'
import { Router } from 'express'

const router = Router()

router.get('/:id', UserValidator.idValidator, UserController.id)

export default router
