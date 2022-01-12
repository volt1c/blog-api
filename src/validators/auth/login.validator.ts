import { body } from 'express-validator'

export default [body('name').isString(), body('pass').isString()]
