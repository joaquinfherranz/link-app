const {
  freecodecamp: freecodecampDownloader,
  javascriptkicks: javascriptkicksDownloader
} = require('../downloaders')

const { JSDOM } = require('jsdom')

const scraping = ({ html, selector, host }) => {
  const dom = new JSDOM(html)
  const document = dom.window.document
  const url = (href) => href.startsWith('https') ? href : host + href
  return Array.from(document.querySelectorAll(selector)).map(a => a.href).map(url)
}

const freecodecamp = async () => {
  const html = await freecodecampDownloader()
  const selector = 'h2.post-card-title > a'
  const host = 'https://www.freecodecamp.org'
  return scraping({ html, selector, host })
}

const javascriptkicks = async () => {
  const html = await javascriptkicksDownloader()
  const selector = 'h2.story-title > a[href]'
  const host = 'https://javascriptkicks.com'
  return scraping({ html, selector, host })
}

module.exports = {
  freecodecamp,
  javascriptkicks
}
