import { Request, Response } from 'express'
import { User } from '../../models/user/user.model'

export default async (req: Request, res: Response) => {
  const { name } = req.params

  const rawUser = await User.findOne({ name }).exec()

  res.status(200).json({
    name: rawUser?.name,
    email: rawUser?.email,
    avatar: rawUser?.avatar,
  })
}
