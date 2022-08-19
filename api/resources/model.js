const db = require('../../data/dbConfig')

function getResources() {
   return db('resources') 
}

async function createResource(resource) {
    await db('resources').insert(resource)
    const result = await getResources()
    return result[result.length-1]
}

module.exports = {
    getResources,
    createResource
}
