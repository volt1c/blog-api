import { Schema, Document, model } from 'mongoose'
import { UserDoc } from './user.model'
import { CommentDoc } from './comment.model'

const postSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      trim: true,
    },
    content: {
      required: true,
      type: String,
    },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: true,
  }
)

interface PostDoc extends Document {
  _id: string
  title: string
  content: string
  sender: UserDoc
  comments: CommentDoc[]
  createdAt: Date
  updatedAt: Date
}

const Post = model<PostDoc>('Post', postSchema)
export { Post, PostDoc }
