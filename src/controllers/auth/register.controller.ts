import { Request, Response } from 'express'
import { User } from 'models/user'
import bcrypt from 'bcrypt'

export async function register(req: Request, res: Response) {
  const { email, name, pass } = req.body

  const hash = bcrypt.hashSync(pass, 12)

  new User({
    name: name,
    pass: hash,
    email: email,
    avatar: process.env.AVATAR_URL ?? 'https://i.imgur.com/IFtORGZ.png',
  })
    .save()
    .then(() => {
      res.status(201).end()
    })
}
