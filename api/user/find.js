const { User } = require('../../models')

function findUser (req, res) {
  User.find()
    .then((users) => res.json({ users }))
    .catch((error) => res.status(400).json(error))
}

module.exports = findUser
