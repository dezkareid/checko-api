const passport = require('passport')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { authSecret } = require('../../config/token')

passport.use('jwt', new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: authSecret
}, (jwtPayload, done) => {
  if (Date.now() > jwtPayload.expires) {
    return done('jwt expired')
  }

  return done(null, jwtPayload)
}))

module.exports = {
  authMiddleware: passport.authenticate('jwt', { session: false })
}
