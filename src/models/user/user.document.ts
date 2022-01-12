import { Document } from 'mongoose'

export interface UserDoc extends Document {
  _id?: string
  name: string
  pass: string
  email: string
  avatar: string
  createdAt?: Date
  updatedAt?: Date
}
