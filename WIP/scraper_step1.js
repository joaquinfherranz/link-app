const got = require('got')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { writeFileSync } = require('fs')

const freecodecampScraper = async () => {
  const targetUrl = 'https://www.freecodecamp.org/news/'
  const aSelector = 'h2.post-card-title > a'
  const host = 'https://www.freecodecamp.org'

  const { body } = await got(targetUrl)
  writeFileSync('./freecodecamp.html', body, 'utf8')

  const dom = new JSDOM(body)
  const document = dom.window.document

  const url = (href) => href.startsWith('https') ? href : host + href
  const urls = Array.from(document.querySelectorAll(aSelector)).map(a => a.href).map(url).map(url => ({ url }))
  console.log('-------freecodecamp:', urls)
  writeFileSync('./freecodecamp.json', JSON.stringify(urls, null, 2), 'utf8')
}

freecodecampScraper()

// https://javascriptkicks.com/stories
// Array.from(document.querySelectorAll('h2.story-title > a')).map(a => a.href)

const javascriptkicksScraper = async () => {
  const targetUrl = 'https://javascriptkicks.com/stories'
  const aSelector = 'h2.story-title > a[href]'
  const host = 'https://javascriptkicks.com'

  const { body } = await got(targetUrl)
  writeFileSync('./javascriptkicks.html', body, 'utf8')

  const dom = new JSDOM(body)
  const document = dom.window.document
  const url = (href) => href.startsWith('https') ? href : host + href
  const urls = Array.from(document.querySelectorAll(aSelector)).map(a => a.href).map(url).map(url => ({ url }))
  console.log('-------javascriptkicks:', urls)
  writeFileSync('./javascriptkicks.json', JSON.stringify(urls, null, 2), 'utf8')
}

javascriptkicksScraper()
