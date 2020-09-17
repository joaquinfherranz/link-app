// @see https://github.com/microlinkhq/metascraper
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

module.exports = async (targetUrl) => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  return metadata
}
