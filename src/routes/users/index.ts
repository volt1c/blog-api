import { Router } from 'express'
import userIdRouter from './name'

const router = Router()

router.use('/name', userIdRouter)

export default router
