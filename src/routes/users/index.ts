import { Router } from 'express'
import UserController from '../../controllers/user'
import UserValidator from '../../validators/user'

const router = Router()

router.get('/:id', UserValidator.id, UserController.id)
router.get('/name/:name', UserValidator.name, UserController.name)

export default router
