const { Event } = require('../../models')

function updateEvent (req, res) {
  const { id } = req.params
  const data = req.body
  Event.updateOne({ _id: id }, data)
    .then((event) => res.json(event))
    .catch((error) => res.status(400).json(error))
}

module.exports = updateEvent
