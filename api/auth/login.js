const { authenticateUser } = require('../../modules/user')

function login (req, res) {
  const credentials = {
    email: req.body.email,
    password: req.body.password
  }
  authenticateUser(credentials)
    .then(token => {
      res.json({ token: `Bearer ${token}` })
    })
    .catch(error => {
      res.status(400).json({ message: error.message })
    })
}

module.exports = login
