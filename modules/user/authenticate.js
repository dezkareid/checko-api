const { User } = require('../../models')
const { checkPassword } = require('../../utils/Auth')
const { generateToken } = require('../../utils/Auth')
const { authSecret, options: tokenOptions } = require('../../config/token')
function userExists (user) {
  if (!user) {
    throw new Error('User not found')
  }
  return user
}

function createCheckPasswordUser (password) {
  return function checkPasswordUser (user) {
    return checkPassword(password, user.password)
  }
}

function generateUserToken (authSecret, options, user) {
  const payload = {
    id: user._id
  }
  return generateToken(payload, authSecret, options)
}

function authenticateUser (credentials) {
  const { email, password } = credentials
  let user = {}
  const checkPasswordUser = createCheckPasswordUser(password)
  const getUser = () => user
  const saveUser = userFound => (user = userFound)
  const createUserToken = generateUserToken.bind(null, authSecret, tokenOptions)
  return User.findOne({ email })
    .then(userExists)
    .then(saveUser)
    .then(getUser)
    .then(checkPasswordUser)
    .then(getUser)
    .then(createUserToken)
}

module.exports = {
  userExists,
  authenticateUser
}
