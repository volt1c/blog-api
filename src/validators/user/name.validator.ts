import { NextFunction, Request, Response } from 'express'
import { param, ValidationError, validationResult } from 'express-validator'
import { User } from '../../models/user'

export default [
  param('name').isString(),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() })

    const { name } = req.params

    if (!(await User.findOne({ name: name }))) {
      const err: ValidationError = {
        msg: 'no user with this name',
        param: 'name',
        location: 'params',
        value: name,
      }

      return res.status(400).send({ err: [err] })
    }

    next()
  },
]
