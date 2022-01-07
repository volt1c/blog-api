import { Router } from 'express'
import registerRoute from './register'

const router = Router()

router.use(registerRoute)

export default router
