import { Schema } from 'mongoose'

export const CommentSchema = new Schema(
  {
    content: {
      required: true,
      type: String,
      trim: true,
    },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)
