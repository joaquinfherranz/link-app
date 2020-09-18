const request = require('supertest')
const app = require('../../services/server')
const { resetDB, populateDB } = require('../helpers')
const store = require('../../services/store')

beforeAll(() => {
  resetDB()
  populateDB()
})

afterAll(resetDB)

describe('GET /api/v1/news endpoint', () => {
  test('Should respond with news data', () => {
    request(app)
      .get('/api/v1/news')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({ body }) => {
        const storedData = store.news.fetchAll()
        expect(body).toStrictEqual(storedData)
      })
  })
})

describe('GET / endpoint', () => {
  test('Should respond an html file that contains Hello developers!', async () => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .then((res) => {
        expect(res.text).toContain('Link app')
      })
  })
})
