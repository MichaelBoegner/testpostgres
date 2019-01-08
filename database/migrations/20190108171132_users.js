
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users => {
        users
          .increments()
          .notNullable()
    
        users
          .string('name', 128)
          .notNullable()
        
        users
          .string('permissions', 128)
          .notNullable()
        });
    };


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
