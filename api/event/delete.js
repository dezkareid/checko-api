const { Event } = require('../../models')

function deleteEvent (req, res) {
  const { id } = req.params
  Event.deleteOne({ _id: id })
    .then(() => res.sendStatus(200))
    .catch((error) => res.status(400).json(error))
}

module.exports = deleteEvent
