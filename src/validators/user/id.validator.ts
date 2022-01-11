import { NextFunction, Request, Response } from 'express'
import { param, ValidationError, validationResult } from 'express-validator'
import { User } from '../../models/user'

export default [
  param('id').isString(),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() })

    const { id } = req.params

    if (!(await User.findOne({ _id: id }))) {
      const err: ValidationError = {
        msg: 'no user with this id',
        param: 'id',
        location: 'params',
        value: id,
      }

      return res.status(400).send({ err: [err] })
    }

    next()
  },
]
