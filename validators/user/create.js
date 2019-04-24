const { User } = require('../../models')
function getErrorFromNewUserData (user) {
  if (user.name && user.email && user.password) {
    return null
  } else {
    return new Error('User Data is not valid')
  }
}

function getErrorIfUserExist (user) {
  return User.findOne({ email: user.email })
    .then((user) => {
      if (user) {
        throw new Error('User Exist')
      }
    })
}

module.exports = {
  getErrorFromNewUserData,
  getErrorIfUserExist
}
