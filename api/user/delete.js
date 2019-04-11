const { User } = require('../../models')

function deleteUser (req, res) {
  const { id } = req.params
  User.deleteOne({ _id: id })
    .then(() => res.sendStatus(200))
    .catch((error) => res.status(400).json(error))
}

module.exports = deleteUser
