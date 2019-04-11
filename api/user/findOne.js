const { User } = require('../../models')

function findOneUser (req, res) {
  const { id } = req.params
  User.findOne({ _id: id })
    .then((user) => res.json(user))
    .catch((error) => res.status(400).json(error))
}

module.exports = findOneUser
