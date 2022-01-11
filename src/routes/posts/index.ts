import { Router } from 'express'
import PostController from '../../controllers/post'
import auth from '../../middlewares/auth'
import PostValidator from '../../validators/post'

const router = Router()

router.get('/all', PostValidator.all, PostController.all)
router.get('/id/:id', PostValidator.id, PostController.id)
router.post('/create', auth, PostValidator.create, PostController.create)

export default router
