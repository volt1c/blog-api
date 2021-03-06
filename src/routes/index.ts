import { Request, Response, Router } from 'express'
import authRoutes from './auth'
import commentRoutes from './comments'
import postRoutes from './posts'
import userRoutes from './users'

const router = Router()

router.use('/auth', authRoutes)
router.use('/comments', commentRoutes)
router.use('/posts', postRoutes)
router.use('/users', userRoutes)

router.get('/', async (req: Request, res: Response) => {
  res.status(200).end('Api works!')
})

export default router
