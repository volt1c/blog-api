import { Request, Response } from 'express'
import { User } from '../../models/user'

export default async (req: Request, res: Response) => {
  const { email, name, pass } = req.body

  const user = new User({
    name: name,
    email: email,
    avatar: process.env.AVATAR_URL,
  })

  await User.register(user, pass)

  res.status(201).end()
}
