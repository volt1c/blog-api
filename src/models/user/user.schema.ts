import passportLocalMongoose from 'passport-local-mongoose'
import { PassportLocalOptions, PassportLocalSchema, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
      unique: true,
      trim: true,
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
) as PassportLocalSchema

const opt: PassportLocalOptions = {
  usernameField: 'name',
  usernameQueryFields: [],
}

UserSchema.plugin(passportLocalMongoose, opt)

export { UserSchema }
