const passport = require('passport')
const cookieParser = require('cookie-parser')
const { Router } = require('express')
const UserRouter = require('./user')
const EventRouter = require('./event')
const authRouter = require('./auth')

const apiRouter = Router()
apiRouter.use(cookieParser())
apiRouter.use(passport.initialize())

apiRouter.get('/', (req, res) => {
  res.json({ appName: 'Api checko', version: 1 })
})

apiRouter.use('/auth', authRouter)
apiRouter.use('/user', UserRouter)
apiRouter.use('/event', EventRouter)

module.exports = apiRouter
