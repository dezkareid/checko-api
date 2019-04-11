const { Router } = require('express')
const find = require('./find')
const save = require('./save')
const findOne = require('./findOne')
const update = require('./update')
const deleteUser = require('./delete')

const userRouter = Router()

userRouter.get('/', find)
userRouter.post('/', save)
userRouter.get('/:id', findOne)
userRouter.patch('/:id', update)
userRouter.delete('/:id', deleteUser)

module.exports = userRouter
