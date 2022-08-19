exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.varchar('project_name')
                .notNullable()
            tbl.varchar('project_description')
            tbl.boolean('project_completed')
                .defaultTo('false')
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id')
            tbl.varchar('resource_name')
                .notNullable()
                .unique()
            tbl.varchar('resource_description')
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id')
            tbl.varchar('task_description')
                .notNullable()
            tbl.varchar('task_notes')
            tbl.boolean('task_completed')
                .defaultTo('false')
            tbl.integer('project_id')
                .notNullable()
                .unsigned()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('')
        .dropTableIfExists('')
        .dropTableIfExists('')
        .dropTableIfExists('');
};
