import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import ms from 'ms'
import { UserDoc } from '../../models/user'

export default async (req: Request, res: Response) => {
  const { _id } = req.user as UserDoc

  const token = jwt.sign({ id: _id }, process.env.TOKEN_SECRET as string, {
    expiresIn: ms('24h'),
  })

  res.send({ token })
}
