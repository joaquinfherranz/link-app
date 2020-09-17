const got = require('got')
const { writeFileSync } = require('fs')

// @see https://github.com/microlinkhq/metascraper/blob/master/packages/metascraper-clearbit/index.js

const ENDPOINT = 'https://autocomplete.clearbit.com/v1/companies/suggest'

const DEFAULT_GOT_OPTS = {
  responseType: 'json',
  timeout: 3000
}

;(async function () {
  const { body: data } = await got(ENDPOINT, {
    ...DEFAULT_GOT_OPTS,
    // ...gotOpts,
    searchParams: { query: 'web.dev' }
  })
  console.log('---data:', data)
  writeFileSync('./clearbit.json', JSON.stringify(data, null, 2), 'utf8')
})()
