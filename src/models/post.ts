import { Schema, Document, model } from 'mongoose'
import { IUser } from './user'
import { IComment } from './comment'

const postSchema = new Schema({
  _id: String,
  title: String,
  content: String,
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  cratedAt: Date,
})

interface IPost extends Document {
  _id: string
  title: string
  content: string
  sender: IUser
  comments: IComment[]
  createdAt: Date
}
interface ICreatePost {
  title: IPost['title']
  content: IPost['content']
  sender: IPost['sender']
}

const Post = model<IPost>('Post', postSchema)
export { Post, IPost, ICreatePost }
