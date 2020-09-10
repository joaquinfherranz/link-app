const request = require('supertest')
const app = require('../../services/server')

describe('GET /api/v1 endpoint', () => {
  test('Should respond a json with a Hello World!', () => {
    request(app)
      .get('/api/v1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({ body }) => {
        expect(body.message).toBe('Hello World!')
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
        expect(res.text).toContain('Hello developers!')
      })
  })
})
