import { Schema, Document, model } from 'mongoose'

const userSchema = new Schema({
  id: String,
  username: String,
  password: String,
  email: String,
  avatar: String,
  createdAt: Date,
})

interface IUser extends Document {
  id: string
  username: string
  password: string
  email: string
  avatar: string
  createdAt: Date
}
interface ICreateUser {
  username: IUser['username']
  password: IUser['password']
  email: IUser['email']
}

const Post = model<IUser>('Post', userSchema)
export { Post, IUser, ICreateUser }
