const request = require('supertest')
const app = require('../../services/server')

describe('GET / endpoint', () => {
  test('Should respond with a Hello World!', () => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({ body }) => {
        expect(body.message).toBe('Hello World!')
      })
      .catch(console.error)
  })
})
