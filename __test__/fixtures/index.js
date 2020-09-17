const news = require('./samples/news.json')
const freecodecampScraping = require('./scraping_samples/freecodecamp.json')
const javascriptkicksScraping = require('./scraping_samples/javascriptkicks.json')
const promisesMetascraping = require('./metascraping_samples/promises.json')
const clearbitsSource = require('./sources_samples/clearbits.json')
const { readFileSync } = require('fs')
const { join } = require('path')

const readSourceSampleFile = (filename) => readFileSync(join(__dirname, './sources_samples/' + filename), 'utf8')

module.exports = {
  news: {
    allNews: news,
    newsDetail: news[0],
    validId: news[0].id
  },
  sources: {
    freecodecamp: readSourceSampleFile('freecodecamp.html'),
    javascriptkicks: readSourceSampleFile('javascriptkicks.html'),
    promises: readSourceSampleFile('promises.html'),
    clearbits: clearbitsSource
  },
  scraping: {
    freecodecamp: freecodecampScraping,
    javascriptkicks: javascriptkicksScraping,
    repetedUrl: freecodecampScraping.urls.filter(url => javascriptkicksScraping.urls.includes(url))[0]
  },
  metascraping: {
    url: promisesMetascraping.url,
    metadata: promisesMetascraping
  }
}
