const { Router } = require('express')
const UserRouter = require('./user')

const apiRouter = Router()

apiRouter.get('/', (req, res) => {
  res.json({ appName: 'Api checko', version: 1 })
})

apiRouter.use('/user', UserRouter)

module.exports = apiRouter
