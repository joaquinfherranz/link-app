const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-clearbit')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
])
const got = require('got')
const { writeFileSync } = require('fs')
const url2metadata = async (targetUrl) => {
  const { body: html, url } = await got(targetUrl)
  const data = await metascraper({ html, url })
  return data
}

url2metadata('https://web.dev/promises/').then(data => writeFileSync('./promises.json', JSON.stringify(data, null, 2), 'utf8'))
