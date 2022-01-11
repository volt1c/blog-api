import passport from 'passport'
import { Strategy } from 'passport-local'
import { User } from '../models/user'

export default () => {
  passport.use(
    new Strategy(
      {
        usernameField: 'name',
        passwordField: 'pass',
      },
      User.authenticate()
    )
  )
}
