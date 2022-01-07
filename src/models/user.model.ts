import { Schema, Document, model } from 'mongoose'

const userSchema = new Schema({
  name: String,
  pass: String,
  email: String,
  avatar: String,
  createdAt: Date,
})

interface UserDoc extends Document {
  _id?: string
  name: string
  pass: string
  email: string
  avatar: string
  createdAt: Date
}

const User = model<UserDoc>('User', userSchema)

export { User, UserDoc }
