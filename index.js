var db = require('./dbMock');

const dbSearch = (searchInput, database) => {
    if(!searchInput) return [];
    const searchResult = database.filter(el => el.includes(searchInput));
    return searchResult.length > 3 ? searchResult.slice(0, 3) : searchResult;
};

module.exports = dbSearch;