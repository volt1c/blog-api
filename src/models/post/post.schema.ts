import { Schema } from 'mongoose'

export const PostSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      trim: true,
    },
    content: {
      required: true,
      type: String,
    },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: true,
  }
)
