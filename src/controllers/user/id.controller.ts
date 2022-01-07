import { Request, Response } from 'express'
import { User } from '../../models/user/user.model'

export async function id(req: Request, res: Response) {
  const { id } = req.params
  const rawUser = await User.findById(id).exec()
  res.status(200).json({
    id: rawUser?._id,
    name: rawUser?.name,
    email: rawUser?.email,
    avatar: rawUser?.avatar,
  })
}
