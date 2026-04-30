import { app } from '../index';
import request from 'supertest';

// Pruebas de integración para el endpoint raíz
describe('Endpoint GET /', () => {
  it('devuelve código 200 con el texto esperado', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!');
  });
});
