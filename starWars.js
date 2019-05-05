var fetch = require('node-fetch');

function getPeople(fetch){
    return fetch('https://swapi.co/api/people')
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