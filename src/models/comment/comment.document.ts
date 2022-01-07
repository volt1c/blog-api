import { UserDoc } from 'models/user'
import { Document } from 'mongoose'

export interface CommentDoc extends Document {
  _id: string
  content: string
  sender: UserDoc
  createdAt: Date
  updatedAt: Date
}
