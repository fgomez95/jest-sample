var swapi = require('./starWars');
var fetch = require('node-fetch');

describe('swapi', () => {
    it('should be defined', () => {
        expect(swapi).not.toBe(undefined);
    });
    it('should return a total count of 87', () => {
        expect.assertions();
        return swapi.getPeople(fetch)
            .then(data => {
                expect(data.count).toEqual(87);
            });
    });
    it('should accept page param', () => {
        expect.assertions();
        return swapi.getPeople(fetch, '2')
            .then(data => {
                expect(data.results.length).toEqual(10);
            });
    });
    it('should return a total results length of 10 per page', () => {
        expect.assertions(1);
        return swapi.getPeople(fetch)
            .then(data => {
                expect(data.results.length).toEqual(10);
            });
    });
    it('mocks getPeople returns count and results', () => {
        const mockFetch = jest.fn()
            .mockReturnValue(Promise.resolve({
                json: () => Promise.resolve({
                    count: 87,
                    results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                })
            }));
        expect.assertions(4);
        return swapi.getPeople(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
            expect(data.count).toEqual(87);
            expect(data.results.length).toEqual(10);
        });
    });
});