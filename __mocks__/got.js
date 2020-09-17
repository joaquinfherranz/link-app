const { sources } = require('../__test__/fixtures')

const responseBody = {
  'https://www.freecodecamp.org/news/': sources.freecodecamp,
  'https://javascriptkicks.com/stories': sources.javascriptkicks,
  'https://web.dev/promises/': sources.promises,
  'https://autocomplete.clearbit.com/v1/companies/suggest': sources.clearbits
}

module.exports = (url) =>
  responseBody[url]
    ? Promise.resolve({ body: responseBody[url], url })
    : Promise.reject(new Error('unknown url'))
