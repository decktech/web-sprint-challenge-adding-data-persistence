const db = require('../../data/dbConfig')

function getResources() {
   return db('resources') 
}

async function createResource(resource) {
}

module.exports = {
    getResources,
    createResource
}
