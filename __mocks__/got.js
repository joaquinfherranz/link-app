const { sources } = require('../__test__/fixtures')

const responseBody = {
  'https://www.freecodecamp.org/news/': sources.freecodecamp,
  'https://javascriptkicks.com/stories': sources.javascriptkicks
}

module.exports = (url) => responseBody[url] ? Promise.resolve({ body: responseBody[url] }) : Promise.reject(new Error('unknown url'))
