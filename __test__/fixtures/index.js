const news = require('./samples/news.json')

module.exports = {
  news: {
    allNews: news,
    newsDetail: news[0],
    validId: news[0].id
  }
}
