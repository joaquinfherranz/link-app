const news = require('./samples/news.json')
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
    javascriptkicks: readSourceSampleFile('javascriptkicks.html')
  }
}
