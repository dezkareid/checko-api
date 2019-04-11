const { User } = require('../../models')

function updateUser (req, res) {
  const { id } = req.params
  const data = req.body
  User.updateOne({ _id: id }, data)
    .then((user) => res.json(user))
    .catch((error) => res.status(400).json(error))
}

module.exports = updateUser
