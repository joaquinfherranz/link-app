const {
  freecodecamp: freecodecampConfig,
  javascriptkicks: javascriptkicksConfig
} = require('./config')

const { JSDOM } = require('jsdom')

const scraping = ({ downloader, selector, home }) => async () => {
  const html = await downloader()
  const dom = new JSDOM(html)
  const document = dom.window.document
  const url = (href) => href.startsWith('http') ? href : home + href
  return Array.from(document.querySelectorAll(selector)).map(a => a.href).map(url)
}

const freecodecamp = scraping(freecodecampConfig)
const javascriptkicks = scraping(javascriptkicksConfig)
const news = async () => {
  const urls = await Promise.all([freecodecamp(), javascriptkicks()])
  return [...new Set(urls.flat())]
}

module.exports = {
  freecodecamp,
  javascriptkicks,
  news
}
