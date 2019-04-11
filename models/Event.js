const { model } = require('mongoose')
const EventSchema = require('../schemas/Event')

const EventModel = model('Event', EventSchema)

module.exports = EventModel
