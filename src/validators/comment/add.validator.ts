import { body } from 'express-validator'

export default [
  body('postId').isString().isLength({ min: 24, max: 24 }),
  body('content').isString().isLength({ min: 50, max: 1000 }),
]
