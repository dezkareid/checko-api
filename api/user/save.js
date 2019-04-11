const { User } = require('../../models')

function saveUser (req, res) {
  const data = req.body
  User.create(data)
    .then((user) => res.json(user))
    .catch((error) => res.status(400).json(error))
}

module.exports = saveUser
