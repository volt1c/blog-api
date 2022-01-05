import { Schema, Document, model } from 'mongoose'
import { IUser } from './user'

const userSchema = new Schema({
  id: String,
  content: String,
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date,
})

interface IComment extends Document {
  id: string
  content: string
  sender: IUser
  createdAt: Date
}

interface ICreateUser {
  content: IComment['content']
  sender: IComment['sender']
}

const Post = model<IComment>('Post', userSchema)
export { Post, IComment, ICreateUser as ICreatePost }
