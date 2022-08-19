exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   

      { task_description: 'project settup', task_notes: 'install dependecies', task_completed: false, project_id: 1 },
      { task_description: 'log to console', task_notes: "use 'console.log'", task_completed: false, project_id: 1 },

      { task_description: 'read instructions', task_notes: '', task_completed: true, project_id: 2 },
      { task_description: 'do math', task_notes: 'use calculator', task_completed: null, project_id: 2 },

      { task_description: 'complete steps 1-87', task_notes: null, task_completed: true, project_id: 3 },
      { task_description: 'make a commit', task_notes: null, task_completed: false, project_id: 3 },
      
    ]);
  };