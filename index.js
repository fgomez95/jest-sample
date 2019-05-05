var db = require('./dbMock');

const dbSearch = (searchInput, database) => {
    const searchResult = database.filter(el => el.includes(searchInput));
    return searchResult.length > 3 ? searchResult.slice(0, 3) : searchResult;
};

//console.log(dbSearch('uc', db));

module.exports = dbSearch;