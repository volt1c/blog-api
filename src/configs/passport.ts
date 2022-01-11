import passport from 'passport'
import { Strategy } from 'passport-local'
import passportJWT from 'passport-jwt'
import { User } from '../models/user'

const StrategyJwt = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt

const verifyCallback: passportJWT.VerifiedCallback = (payload, done) => {
  return User.findOne({ _id: payload.id })
    .then(user => {
      return done(null, user)
    })
    .catch((err: Error) => {
      return done(err)
    })
}

export default () => {
  const config: passportJWT.StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET,
  }

  passport.use(
    new Strategy(
      {
        usernameField: 'name',
        passwordField: 'pass',
      },
      User.authenticate()
    )
  )

  passport.use(new StrategyJwt(config, verifyCallback))
}
