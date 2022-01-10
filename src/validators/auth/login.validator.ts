import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'

export const loginValidator = [
  body('name').isString(),
  body('pass').isString(),
  async (req: Request, res: Response, next: NextFunction) => {
    next()
  },
]
