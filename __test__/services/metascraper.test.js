const metascraper = require('../../services/metascraper')
const { metascraping: { url: urlFixture, metadata: metadataFixture } } = require('../fixtures')

describe('Metascraper behaviour', () => {
  test('promises metascraper', async () => {
    const metadata = await metascraper(urlFixture)
    expect(metadata).toStrictEqual(metadataFixture)
  })
})
