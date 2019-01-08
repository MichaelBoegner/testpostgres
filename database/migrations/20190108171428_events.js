
exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', events => {
        events
          .increments()
          .notNullable()
    
        events
          .string('date_time', 128)
          .notNullable()

        events
          .string('event_type_id', 128)
          .notNullable()

        events
          .string('user_id1', 128)
          .notNullable()

        events
          .string('user_id2', 128)
          .notNullable()
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('events');
};
