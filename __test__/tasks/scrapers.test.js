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
})
