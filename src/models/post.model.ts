import { Schema, Document, model } from 'mongoose'
import { UserDoc } from './user.model'
import { CommentDoc } from './comment.model'

const postSchema = new Schema({
  _id: String,
  title: String,
  content: String,
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  cratedAt: Date,
})

interface PostDoc extends Document {
  _id: string
  title: string
  content: string
  sender: UserDoc
  comments: CommentDoc[]
  createdAt: Date
}

const Post = model<PostDoc>('Post', postSchema)
export { Post, PostDoc }
