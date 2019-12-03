const request = require('supertest');
const app = require('../server/app');


describe('Test the path "/test"', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
        expect(response.body.time).toBe('now');
  
    
    });
}); 




