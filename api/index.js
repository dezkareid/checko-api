const { Router } = require('express')

const apiRouter = Router()

apiRouter.get('/', (req, res) => {
  res.send('Hello World')
})

module.exports = apiRouter
