const store = require('../../services/store')
const { news } = require('../fixtures')

beforeEach(() => {
  store.reset()
})

afterEach(() => {
  store.reset()
})

describe('Store Service', () => {
  test('Should handle news data', () => {
    const { newsDetail, validId } = news
    expect(store.news.fetchAll()).toStrictEqual([])
    store.news.save(newsDetail)
    expect(store.news.fetchAll()).toStrictEqual([newsDetail])
    expect(store.news.fetchById(validId)).toStrictEqual([newsDetail])
  })
})
