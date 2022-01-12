import { body } from 'express-validator'

export default [body('postId').isString(), body('content').isString()]
