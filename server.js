const config = require('./config')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

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

app.use((req, res) => {
  res.status(404).json({ message: 'endpoint not found' })
})

app.listen(config.port, () => {
  console.log('Ready For Work')
})
