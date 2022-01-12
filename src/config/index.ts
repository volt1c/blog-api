import passport from './passport'
import dotenv from './dotenv'

export default () => {
  dotenv()
  passport()
}
