const { freecodecamp, javascriptkicks } = require('../../tasks/scrapers')
const {
  scraping: {
    freecodecamp: { urls: freecodecampFixture },
    javascriptkicks: { urls: javascriptkicksFixture }
  }
} = require('../fixtures')

describe('Scrapers behaviour', () => {
  test('freecodecamp scraper', async () => {
    const urls = await freecodecamp()
    expect(urls).toStrictEqual(freecodecampFixture)
  })

  test('javascriptkicks scraper', async () => {
    const urls = await javascriptkicks()
    expect(urls).toStrictEqual(javascriptkicksFixture)
  })

  test('news scraper', async () => {
    // @TODO: Validate that all freecodecamp urls are included in news urls
    // @TODO: Validate that all javascriptkicks urls are included in news urls
    // @TODO: Validate that there are no repeted urls
  })
})
