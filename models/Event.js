const { model } = require('mongoose')
const EventSchema = require('../schemas/Event')

const EventModel = model('Rol', EventSchema)

module.exports = EventModel
