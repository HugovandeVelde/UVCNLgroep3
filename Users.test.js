const request = require('supertest');
const app = 'http://localhost:4008';

describe('Recipe API', () => {
  beforeAll(() => {
  });

  afterAll(() => {
  });

  it('GET /users should return all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
});
