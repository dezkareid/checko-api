const { Router } = require('express')
const find = require('./find')
const save = require('./save')
const findOne = require('./findOne')
const update = require('./update')
const deleteUser = require('./delete')
const me = require('./me')
const { authMiddleware } = require('../../modules/auth')
const { validateNewUserData, validateNewUserDontExists } = require('../../validators/user')
const { LogError } = require('../../utils/Log')
const userRouter = Router()

userRouter.get('/', find)
userRouter.post('/', validateNewUserData, validateNewUserDontExists, LogError, save)
userRouter.get('/me', authMiddleware, me)
userRouter.get('/:id', findOne)
userRouter.patch('/:id', update)
userRouter.delete('/:id', deleteUser)

userRouter.use((err, req, res, next) => {
  const { message } = err
  if (message === 'User Data is not valid') {
    res.status(400).json({ message: err.message })
  } else {
    next(err)
  }
})

module.exports = userRouter
