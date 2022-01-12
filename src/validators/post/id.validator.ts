import { param } from 'express-validator'

export default [param('id').isString().isLength({ min: 24, max: 24 })]
