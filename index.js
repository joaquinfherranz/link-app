require('dotenv').config()

const app = require('./services/server')
const port = process.env.PORT
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

// Redirect HTTP to HTTPS,
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
