import { Schema } from 'mongoose'

export const UserSchema = new Schema(
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
