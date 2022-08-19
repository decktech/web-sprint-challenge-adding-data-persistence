exports.seed = function(knex, Promise) {
    return knex('resources').insert([   

      { resource_name: 'js', resource_description: 'javascript' },
      { resource_name: 'docs', resource_description: 'documentaion' },
      
      { resource_name: 'calculator', resource_description: 'does math' },
      { resource_name: 'MDN', resource_description: 'more documentation' },

      { resource_name: 'rocks', resource_description: 'beats scissors' },
      { resource_name: 'paper' },

    ]);
  };