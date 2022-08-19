const db = require('../../data/dbConfig')

async function getProjects() {
   const result = await db('projects') 
   result.forEach(project => {
    if (project.project_completed === 1) {
        project.project_completed = true
    } else if (project.project_completed == null || project.project_completed === 0) {
        project.project_completed = false
    } 
   })
   return result;
}

async function createProject(project) {
    await db('projects').insert(project);
    const result = await getProjects()
    return result[result.length -1]
}

module.exports = {
    getProjects,
    createProject
}
