const { freecodecamp, javascriptkicks, news } = require('../../tasks/scrapers')
const {
  scraping: {
    freecodecamp: { urls: freecodecampFixture },
    javascriptkicks: { urls: javascriptkicksFixture },
    repetedUrl
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
    const freecodecampUrls = await freecodecamp()
    const javascriptkicksUrls = await javascriptkicks()
    const urls = await news()

    // all freecodecamp urls are included in news urls
    expect(urls).toEqual(expect.arrayContaining(freecodecampUrls))
    // all javascriptkicks urls are included in news urls
    expect(urls).toEqual(expect.arrayContaining(javascriptkicksUrls))
    // there are no repeted urls
    expect(urls.filter(url => url === repetedUrl).length).toStrictEqual(1)
  })
})
