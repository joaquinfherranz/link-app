const { freecodecamp } = require('../../tasks/scrapers')
const {
  scraping: {
    freecodecamp: freecodecampFixture
  }
} = require('../fixtures')

describe('Scrapers behaviour', () => {
  test('freecodecamp scraper', async () => {
    const urls = await freecodecamp()
    expect(urls).toStrictEqual([] || freecodecampFixture.urls)
    // @TODO: Validate scraping result
    // expect(urls).toStrictEqual(freecodecampFixture.urls)
  })
})
