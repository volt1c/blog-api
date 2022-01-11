import { CommentDoc } from '../../models/comment'
import { UserDoc } from '../../models/user'
import { Document } from 'mongoose'

export interface PostDoc extends Document {
  _id: string
  title: string
  content: string
  sender: UserDoc
  comments: CommentDoc[]
  createdAt: Date
  updatedAt: Date
}
