// @see https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/
const crypto = require('crypto')

const hash = (json) => crypto.createHash('md5').update(JSON.stringify(json)).digest('hex')

module.exports = {
  news: (metadata) => ({ id: hash(metadata), metadata })
}
