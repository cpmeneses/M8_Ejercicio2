const request = require('supertest');
const app = require('../backend/server'); // Importa el servidor

describe('GET /', () => {
  it('debería responder con "Hola Mundo desde Node.js con Docker!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hola Mundo desde Node.js con Docker!');
  });
});