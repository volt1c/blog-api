import { model, PassportLocalModel } from 'mongoose'
import { UserDoc } from './user.document'
import { UserSchema } from './user.schema'

export const User: PassportLocalModel<UserDoc> = model<UserDoc>(
  'User',
  UserSchema
)
