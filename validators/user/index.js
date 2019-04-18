const { getErrorFromNewUserData, getErrorIfUserExist } = require('./create')
function validateNewUserData (req, res, next) {
  const user = req.body
  const error = getErrorFromNewUserData(user)
  if (error) {
    throw error
  }
  next()
}

function validateNewUserDontExists (req, res, next) {
  const user = req.body
  getErrorIfUserExist(user)
    .then(() => next())
    .catch((error) => next(error))
}

module.exports = {
  validateNewUserData,
  validateNewUserDontExists
}
