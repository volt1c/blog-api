import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

export default (req: Request, res: Response, next: NextFunction) => {
  return passport.authenticate('jwt', { session: false })(req, res, next)
}
