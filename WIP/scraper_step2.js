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
const freecodecampJSON = require('../freecodecamp.json')
const javascriptkicksJSON = require('../javascriptkicks.json')

// const urls = [...freecodecampJSON, ...javascriptkicksJSON]
// console.log('freecodecampJSON',freecodecampJSON.length, 'javascriptkicksJSON:', javascriptkicksJSON.length, 'TOTAL:',urls.length)

let urls = freecodecampJSON.map(item => item.url)
javascriptkicksJSON.map(item => item.url).forEach(item => {
  if (!urls.includes(item)) urls.push(item)
})
urls = urls.map(item => {})

console.log(urls, 'freecodecampJSON', freecodecampJSON.length, 'javascriptkicksJSON:', javascriptkicksJSON.length, 'TOTAL:', urls.length)

const url2metadata = async (targetUrl) => {
  const { body: html, url } = await got(targetUrl)
  const data = await metascraper({ html, url })
  return data
}

Promise.all(urls.map(url2metadata)).then(data => {
  const news = data.map((item, i) => ({ id: i + 1, ...item }))
  writeFileSync('./news.json', JSON.stringify(news, null, 2), 'utf8')
  console.log(news)
})
