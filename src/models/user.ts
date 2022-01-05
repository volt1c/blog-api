import { Schema, Document, model } from 'mongoose'

const userSchema = new Schema({
  _id: String,
  username: String,
  password: String,
  email: String,
  avatar: String,
  createdAt: Date,
})

interface IUser extends Document {
  _id: string
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

const User = model<IUser>('User', userSchema)
export { User, IUser, ICreateUser }
