import { NextFunction, Request, Response } from 'express'
import { param, validationResult } from 'express-validator'

export default [
  param('id').isString().isLength({ min: 24, max: 24 }),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() })

    next()
  },
]
