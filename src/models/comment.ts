import { Schema, Document, model } from 'mongoose'
import { IUser } from './user'

const userSchema = new Schema({
  _id: String,
  content: String,
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date,
})

interface IComment extends Document {
  _id: string
  content: string
  sender: IUser
  createdAt: Date
}

interface ICreateUser {
  content: IComment['content']
  sender: IComment['sender']
}

const Comment = model<IComment>('Comment', userSchema)
export { Comment, IComment, ICreateUser }
