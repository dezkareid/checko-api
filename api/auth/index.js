const { Router } = require('express')
const login = require('./login')

const authRouter = Router()

authRouter.post('/login', login)

module.exports = authRouter
