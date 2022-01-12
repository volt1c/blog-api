import { Router } from 'express'
import CommentController from '../../controllers/comment'
import auth from '../../middlewares/auth'
import CommentValidator from '../../validators/comment'

const router = Router()

router.get('/id/:id', CommentValidator.id, CommentController.id)
router.post('/add', auth, CommentValidator.add, CommentController.add)

export default router
