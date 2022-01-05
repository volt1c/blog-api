import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  res.end('Api works!')
})

export default router
