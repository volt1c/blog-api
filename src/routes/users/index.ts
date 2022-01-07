import { Router } from 'express'
import userIdRouter from './id'

const router = Router()

router.use('/id', userIdRouter)

export default router
