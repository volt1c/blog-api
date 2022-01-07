import { model } from 'mongoose'
import { UserDoc } from './user.document'
import { UserSchema } from './user.schema'

export const User = model<UserDoc>('User', UserSchema)
