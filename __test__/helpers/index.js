const fixture = require('../fixtures')
const store = require('../../services/store')

module.exports = {
  resetDB: store.reset,
  populateDB: () => fixture.news.allNews.forEach(store.news.save)
}
