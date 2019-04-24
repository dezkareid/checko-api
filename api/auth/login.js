const { authenticateUser } = require('../../modules/user')
const cookieConfig = require('../../config/cookie')
function login (req, res) {
  const credentials = {
    email: req.body.email,
    password: req.body.password
  }
  authenticateUser(credentials)
    .then(token => {
      res.cookie('jwt', token, cookieConfig)
      res.json({ token: `Bearer ${token}` })
    })
    .catch(error => {
      res.status(400).json({ message: error.message })
    })
}

module.exports = login
