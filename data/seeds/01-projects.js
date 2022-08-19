exports.seed = function(knex, Promise) {
    return knex('projects').insert([   

      { project_name: 'Hello World', project_description: 'hello world', project_completed: "true" },
      { project_name: 'number guesser', project_description: 'guess the number', project_completed: 3 },
      { project_name: 'rock paper scissors', project_description: 'make the game', project_completed: false },
      
    ]);
  };