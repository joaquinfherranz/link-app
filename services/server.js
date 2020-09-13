const express = require('express')
const app = express()
const store = require('./store')

// Handle requests for the data
app.get('/api/v1/news', (req, res) => res.json(store.news.fetchAll()))

// Handle requests for static files
app.use(express.static('public'))

module.exports = app
