import passport from 'passport'
import { jwtStrategy, localStrategy } from '../strategies'

export default () => {
  passport.use(jwtStrategy())
  passport.use(localStrategy())
}
