import { ExtractJwt, Strategy } from 'passport-jwt'
import { User } from '../models/user'

export default () =>
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.TOKEN_SECRET,
    },
    (payload, done) => {
      return User.findOne({ _id: payload.id })
        .then(user => {
          return done(null, user)
        })
        .catch((err: Error) => {
          return done(err)
        })
    }
  )
