const validURL=  require('../client/js/urlChecker');


describe('Test "validURL()" should exist' , () => {
    test('It should return true', async () => {
        expect(validURL).toBeDefined();
    });
});
describe('Test "validURL()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validURL).toBe("function");
    });
});

describe('Test "validURL()" for valid url' , () => {
    var url = "https://www.ndtv.com/india-news/indias-top-quotes-at-united-nations-rights-council-pakistan-misusing-global-platforms-for-own-gain-2098786?pfrom=home-livetv";
    test('It should return true', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
describe('Test "validURL()" for invalid url' , () => {
    var url = "htps://www.timesnownews.com/international/article/us-president-donald-trump-announces-firing-of-national-security-advisor-john-bolton/486412";
    test('It should return false', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});
