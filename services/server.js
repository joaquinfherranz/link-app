const express = require('express')
const app = express()

// Handle requests for the data
app.get('/api/v1', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.get('/api/v1/news', (req, res) => res.json({}))

// Handle requests for static files
app.use(express.static('public'))

module.exports = app
