import { Request, Response } from 'express'
import { User } from '../../models/user/user.model'

export default async (req: Request, res: Response) => {
  const { id } = req.params

  const rawUser = await User.findById(id).exec()

  res.status(200).json({
    name: rawUser?.name,
    email: rawUser?.email,
    avatar: rawUser?.avatar,
  })
}
