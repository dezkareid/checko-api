const { Event } = require('../../models')

function saveEvent (req, res) {
  const data = req.body
  Event.create(data)
    .then((event) => res.json(event))
    .catch((error) => res.status(400).json(error))
}

module.exports = saveEvent
