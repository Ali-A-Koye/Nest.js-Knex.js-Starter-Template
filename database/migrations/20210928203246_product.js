exports.up = function (knex) {
    return knex.schema
      .createTable('product', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
      })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('product');
  };