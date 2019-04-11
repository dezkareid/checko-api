const { Event } = require('../../models')

function findOneEvent (req, res) {
  const { id } = req.params
  Event.findOne({ _id: id })
    .then((event) => res.json(event))
    .catch((error) => res.status(400).json(error))
}

module.exports = findOneEvent
