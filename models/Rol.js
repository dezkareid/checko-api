const { model } = require('mongoose')
const RolSchema = require('../schemas/Rol')

const RolModel = model('Rol', RolSchema)

module.exports = RolModel
