import { Strategy } from 'passport-local'
import { User } from '../models/user'

export default () =>
  new Strategy(
    {
      usernameField: 'name',
      passwordField: 'pass',
    },
    User.authenticate()
  )
