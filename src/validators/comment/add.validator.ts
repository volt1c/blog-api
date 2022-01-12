import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

export default [
  body('postId').isString().isLength({ min: 24, max: 24 }),
  body('content').isString().isLength({ min: 1, max: 300 }),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() })

    next()
  },
]
