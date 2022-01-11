import { body, check } from 'express-validator'

export default [
  body('title').isString(),
  body('content').isString(),
  check('user').notEmpty(),
]
