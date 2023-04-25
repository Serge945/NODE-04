// const firstName = 'Sergi';
// const city = 'Paris';
// const languages= 'React and node.js'
// console.log(`i'm ${firstName}, wilder in ${city}, and i love ${languages}`)
require('dotenv').config();

const firstName= process.env.MY_FIRSTNAME;
const city= process.env.MY_CITY;
const languages = process.env.MY_LANGUAGES
console.log(`i'm ${firstName} wilder in ${city} and i love ${languages}`)