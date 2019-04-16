const bcrypt = require('bcrypt')

function isSamePasswordValidation (match) {
  if (match) {
    return true
  }
  throw new Error('Incorrect Password')
}

function checkPassword (plainTextPassword, cipherPassword) {
  return bcrypt.compare(plainTextPassword, cipherPassword)
    .then(isSamePasswordValidation)
}

module.exports = {
  isSamePasswordValidation,
  checkPassword
}
