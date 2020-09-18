require('dotenv').config()
const app = require('./services/server')
const port = process.env.PORT
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
const { news: newsTask } = require('./tasks')
const { reset } = require('./services/store')

// const { resetDB, populateDB } = require('./__test__/helpers')

// Redirect HTTP to HTTPS,
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301))

/* Just for testing with seeds
resetDB()
populateDB()
*/

const init = async () => {
  reset()
  console.log('Reading news ...')
  await newsTask()
  app.listen(port, () => {
    console.log(`Link app listening at http://localhost:${port}`)
  })
}

init()
