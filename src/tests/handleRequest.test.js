var requestPost = require('../server/handleRequest')
var validateRequest = requestPost.validateRequest;
var httpMocks = require('node-mocks-http');


describe('Test "validateRequest()" should exist' , () => {
    test('It should return true', async () => {
        expect(validateRequest).toBeDefined();
    });
});
describe('Test "validateRequest()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateRequest).toBe("function");
    });
});
describe('Test "validateRequest()" throw error if incorrect user inputs' , () => {
    test('validateRequest should throw error if incorrect user inputs', () => {
    const next = jest.fn();
    // Request here doesn't have the required 'text' field.
    const req = httpMocks.createRequest({ 
        body: { 
        url: "https://www.studentnewsdaily.com/daily-news-article/u-s-seizes-north-korean-cargo-ship/"
        }
    });
    const res = httpMocks.createResponse();
    validateRequest(req, res, next);
    expect(res.statusCode).toBe(400);
    expect(res._isJSON()).toBeTruthy();
    const json = JSON.parse(res._getData());
    expect(json.message).toBe('Invalid input');
});
})