
exports.up = function(knex, Promise) {
    return knex.schema.createTable('event_type', event_type => {
        event_type
          .increments()
          .notNullable()
    
        event_type
          .string('type', 128)
          .notNullable()
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('event_type');
};
