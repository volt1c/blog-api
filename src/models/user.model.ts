import { Schema, Document, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
      unique: true,
      trim: true,
    },
    pass: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      required: false,
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

interface UserDoc extends Document {
  _id?: string
  name: string
  pass: string
  email: string
  avatar: string
  createdAt: Date
  updatedAt: Date
}

const User = model<UserDoc>('User', userSchema)

export { User, UserDoc }
