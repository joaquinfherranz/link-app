const { freecodecamp } = require('../../tasks/downloaders')
const { sources: { freecodecamp: freecodecampFixture } } = require('../fixtures')

describe('Downloaders behaviour', () => {
  test('freecodecamp downloader', async () => {
    const html = await freecodecamp()
    expect(html).toStrictEqual(freecodecampFixture)
  })
})
