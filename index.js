const db = [
    "luctus.felis@fermentumarcu.ca",
    "pharetra.ut.pharetra@necurnaet.com",
    "rutrum.Fusce.dolor@nibh.ca",
    "luctus@euismod.net",
    "ornare.elit@lectusante.org",
    "Nunc@accumsan.com",
    "interdum@ad.ca",
    "odio.vel@nibhvulputate.org",
    "augue@justofaucibuslectus.net",
    "eget@urnaNullam.edu",
    "Donec.felis@aptenttacitisociosqu.co.uk",
    "erat@arcuMorbisit.org",
    "ut.pellentesque@fermentum.org",
    "laoreet@PhasellusornareFusce.org",
    "diam.at.pretium@sapien.com",
    "erat.nonummy.ultricies@Nullaeuneque.edu",
    "arcu.Sed.et@venenatis.com"
];

const dbSearch = (searchInput, database) => {
    const searchResult = database.filter(el => el.includes(searchInput));
    return searchResult.length > 3 ? searchResult.slice(0, 3) : searchResult;
};

console.log(dbSearch('uc', db));

