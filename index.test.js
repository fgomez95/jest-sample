var dbSearch = require('./index');
var db = require('./dbMock');

describe('dbSearch', () => {
    it('should be imported correctly', () => {
        expect(dbSearch).toBeDefined();
    });
    it('should return an empty array if no result found', () => {
        const result = dbSearch('asdfsdf', db);
        expect(result).toEqual([]);
    });
    it('should find one result', () => {
        const emailInput = 'luctus.felis@fermentumarcu.ca';
        const result = dbSearch(emailInput, db);
        expect(result[0]).toEqual(emailInput);
    });
    it('should return a max results length of 3', () => {
        const resLength = dbSearch('.com', db).length;
        const lengthFlag = resLength <= 3 && resLength > 0;
        expect(lengthFlag).toBe(true);
    });
    it('should return an empty string if undefined search string', () => {
        const result = dbSearch(undefined, db);
        expect(result).toEqual([]);
    });
    it('should return an empty string if null search string', () => {
        const result = dbSearch(null, db);
        expect(result).toEqual([]);
    });
});