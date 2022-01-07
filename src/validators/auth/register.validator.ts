import { NextFunction, Request, Response } from 'express'
import { body, ValidationError, validationResult } from 'express-validator'
import { User } from '../../models/user'

export const registerValidator = [
  body('name').isString().isLength({ min: 4, max: 20 }),
  body('pass').isString().isLength({ min: 8, max: 20 }),
  body('email').isEmail(),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() })

    const { name, email } = req.body

    if (await User.findOne({ name })) {
      const err: ValidationError = {
        msg: 'user with this name already exist',
        param: 'name',
        location: 'body',
        value: name,
      }

      return res.status(400).send({ err: [err] })
    }
    const foundedEmail = await User.findOne({ email })
    if (foundedEmail) {
      const err: ValidationError = {
        msg: 'email already used',
        param: 'email',
        location: 'body',
        value: email,
      }
      return res.status(400).send({ err: [err] })
    }

    next()
  },
]
