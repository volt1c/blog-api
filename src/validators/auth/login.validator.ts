import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

export default [
  body('name').isString(),
  body('pass').isString(),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() })

    next()
  },
]
