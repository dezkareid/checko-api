const jwt = require('jsonwebtoken')

function createCallbackSignToken (resolve, reject) {
  return function isTokenGenerated (err, token) {
    if (err) {
      reject(err)
    }
    resolve(token)
  }
}
function generateToken (payload, authSecret, options) {
  return new Promise((resolve, reject) => {
    const callback = createCallbackSignToken(resolve, reject)
    jwt.sign(payload, authSecret, options, callback)
  })
}

module.exports = {
  createCallbackSignToken,
  generateToken
}
