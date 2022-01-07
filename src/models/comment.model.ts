import { Schema, Document, model } from 'mongoose'
import { UserDoc } from './user.model'

const commentSchema = new Schema({
  _id: String,
  content: String,
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date,
})

interface CommentDoc extends Document {
  _id: string
  content: string
  sender: UserDoc
  createdAt: Date
}

const Comment = model<CommentDoc>('Comment', commentSchema)
export { Comment, CommentDoc }
