import { Router } from 'express'
import registerRoute from './register'
import loginRoute from './login'

const router = Router()

router.use(registerRoute)
router.use(loginRoute)

export default router
