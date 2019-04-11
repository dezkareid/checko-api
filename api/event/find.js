const { Event } = require('../../models')

function findEvent (req, res) {
  Event.find()
    .then((events) => res.json({ events }))
    .catch((error) => res.status(400).json(error))
}

module.exports = findEvent
