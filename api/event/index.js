const { Router } = require('express')
const find = require('./find')
const save = require('./save')
const findOne = require('./findOne')
const update = require('./update')
const deleteEvent = require('./delete')

const eventRouter = Router()

eventRouter.get('/', find)
eventRouter.post('/', save)
eventRouter.get('/:id', findOne)
eventRouter.patch('/:id', update)
eventRouter.delete('/:id', deleteEvent)

module.exports = eventRouter
