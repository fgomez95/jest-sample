var fetch = require('node-fetch');

function getPeople(fetch, page){
    const pagination = page ? `/?page=${page}` : '';
    return fetch(`https://swapi.co/api/people${pagination}`)
        .then(response => response.json())
        .then(res => ({
            count: res.count,
            results: res.results
        }))
        .catch(err => err);
};

async function getPeopleAsync(fetch){
    const response = await fetch('https://swapi.co/api/people');
    const result = await response.json();
    return {count: result.count, results: result.results};
};

module.exports = {
    getPeople,
    getPeopleAsync
};