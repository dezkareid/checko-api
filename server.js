const config = require('./config')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

const apiRouter = require('./api')

mongoose.connect(config.database_url, { useNewUrlParser: true })
  .then(
    () => {
      console.log('Database Ready For Action')
    },
    err => {
      console.error(err)
    }
  )

app.get('/', (req, res) => {
  res.json({ appName: 'Api checko', version: 1 })
})

app.use('/api', apiRouter)

app.listen(config.port, () => {
  console.log('Ready For Work')
})
