import { body, check } from 'express-validator'

export default [
  body('title').isString().isLength({ min: 1, max: 40 }),
  body('content').isString().isLength({ min: 50, max: 1600 }),
  check('user').notEmpty(),
]
