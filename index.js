require('dotenv').config()
const app = require('./services/server')
const port = process.env.PORT
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
// const { resetDB, populateDB } = require('./__test__/helpers')

// Redirect HTTP to HTTPS,
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301))

/* Just for testing with seeds
resetDB()
populateDB()
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
