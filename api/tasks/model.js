const db = require('../../data/dbConfig')

async function getTasks() {
   const result = await db('tasks as t')
     .join('projects as p', 'p.project_id', 't.project_id')
     .select('t.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
   result.forEach(task => {
    if (task.task_completed === 1) {
        task.task_completed = true
    } else if (task.task_completed == null || task.task_completed === 0) {
        task.task_completed = false
    } 
   })
   return result;
}

async function createTask(task) {
    await db('tasks').insert(task);
    const result = await getTasks()
    return result[result.length -1]
}

module.exports = {
    getTasks,
    createTask
}
