const { news: newsScraper } = require('./scrapers')
const metascraper = require('../services/metascraper')
const { metadata: metadataValidator } = require('../services/validator')
const { news: newsGenerator } = require('../services/generator')
const { news: newsStore } = require('../services/store')

const news = async () => {
  const urls = await newsScraper()
  const metadata = await Promise.all(urls.map(metascraper))
  metadata
    .filter(metadataValidator)
    .map(newsGenerator)
    .forEach(newsStore.save)
}

module.exports = {
  news
}
