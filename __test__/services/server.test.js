const request = require('supertest')
const app = require('../../services/server')

describe('GET /api/v1 endpoint', () => {
  test('Should respond with a Hello World!', () => {
    request(app)
      .get('/api/v1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({ body }) => {
        expect(body.message).toBe('Hello World!')
      })
  })
})
