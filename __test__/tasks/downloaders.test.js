const { freecodecamp, javascriptkicks } = require('../../tasks/downloaders')
const {
  sources: {
    freecodecamp: freecodecampFixture,
    javascriptkicks: javascriptkicksFixture
  }
} = require('../fixtures')

describe('Downloaders behaviour', () => {
  test('freecodecamp downloader', async () => {
    const html = await freecodecamp()
    expect(html).toStrictEqual(freecodecampFixture)
  })

  test('javascriptkicks downloader', async () => {
    const html = await javascriptkicks()
    expect(html).toStrictEqual(javascriptkicksFixture)
  })
})
