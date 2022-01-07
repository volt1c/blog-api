import { Request, Response, Router } from 'express'
import userRoutes from './users'
import authRoutes from './auth'

const router = Router()

router.use('/users', userRoutes)
router.use('/auth', authRoutes)

router.get('/', async (req: Request, res: Response) => {
  res.status(200).end('Api works!')
})

export default router
