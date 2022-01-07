import { Schema, Document, model } from 'mongoose'
import { UserDoc } from './user.model'

const commentSchema = new Schema(
  {
    content: {
      required: true,
      type: String,
      trim: true,
    },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

interface CommentDoc extends Document {
  _id: string
  content: string
  sender: UserDoc
  createdAt: Date
  updatedAt: Date
}

const Comment = model<CommentDoc>('Comment', commentSchema)
export { Comment, CommentDoc }
