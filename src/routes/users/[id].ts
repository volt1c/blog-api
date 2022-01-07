import { Request, Response, Router } from 'express'
import { param, validationResult } from 'express-validator'
import { User } from '../../models/user.model'

const router = Router()

router.get(
  '/:id',
  param('id').isString(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ err: errors.array() })

    const id = req.params.id
    const rawUser = await User.findById(id).exec()
    res.status(200).json({
      id: rawUser?._id,
      name: rawUser?.name,
      email: rawUser?.email,
    })
  }
)

export default router
