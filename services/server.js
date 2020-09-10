const express = require('express')
const app = express()

app.get('/api/v1/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

module.exports = app
