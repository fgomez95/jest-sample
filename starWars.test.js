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
    it('should return a total results length of 10 per page', () =>{
        expect.assertions(1);
        return swapi.getPeople(fetch)
            .then(data => {
                expect(data.results.length).toEqual(10);
            });
    });
});