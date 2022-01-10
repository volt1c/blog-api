import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import ms from 'ms'
import { UserDoc } from '../../models/user'

export async function login(req: Request, res: Response) {
  const { _id } = req.user as UserDoc

  const accessToken = jwt.sign(
    { id: _id },
    process.env.TOKEN_SECRET as string,
    { expiresIn: ms('24h') }
  )

  const refreshToken = jwt.sign(
    { id: _id },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: ms('30d') }
  )

  res.send({ accessToken, refreshToken })
}
