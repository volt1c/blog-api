import { model } from 'mongoose'
import { CommentDoc } from './comment.document'
import { CommentSchema } from './comment.schema'

export const Comment = model<CommentDoc>('Comment', CommentSchema)
