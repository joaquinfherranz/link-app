const got = require('got')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const freecodecampScraper = async () => {
  const targetUrl = 'https://www.freecodecamp.org/news/'
  const aSelector = 'h2.post-card-title > a'
  const host = 'https://www.freecodecamp.org'

  const { body } = await got(targetUrl)
  const dom = new JSDOM(body)
  const document = dom.window.document
  const urls = Array.from(document.querySelectorAll(aSelector)).map(a => host + a.href)
  console.log(urls)
}

freecodecampScraper()
