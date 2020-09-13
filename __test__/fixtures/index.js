const news = require('./samples/news.json')
const { readFileSync } = require('fs')
const { join } = require('path')

module.exports = {
  news: {
    allNews: news,
    newsDetail: news[0],
    validId: news[0].id
  },
  sources: {
    freecodecamp: readFileSync(join(__dirname, './sources_samples/freecodecamp.html'), 'utf8')
  }
}