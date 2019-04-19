const passport = require('passport')
const { Strategy: JWTStrategy } = require('passport-jwt')
const { authSecret } = require('../../config/token')
const { User } = require('../../models')

function wrapCallbackUserFound (callback) {
  return function userFound (user) {
    if (!user) {
      const error = new Error('User not found')
      callback(error)
    } else {
      callback(null, user)
    }
  }
}
function findUserByPayload (payload, done) {
  const userFoundCallback = wrapCallbackUserFound(done)
  User.findById(payload.id)
    .then(userFoundCallback)
}

const strategyConfiguration = {
  jwtFromRequest: req => req.cookies.jwt,
  secretOrKey: authSecret
}

passport.use('jwt', new JWTStrategy(strategyConfiguration, findUserByPayload))

module.exports = {
  authMiddleware: passport.authenticate('jwt', { session: false })
}
