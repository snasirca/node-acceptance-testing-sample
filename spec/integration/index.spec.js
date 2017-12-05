import request from 'supertest'
import app from '../../app'

describe('index route', function () {
  it('gets the home page', async function () {
    const response = await request(app).get('/')

    expect(response.statusCode).toBe(200)
    expect(response.text).toContain('hello there!')
  })
})
