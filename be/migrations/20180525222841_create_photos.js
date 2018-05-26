
exports.up = function(knex) {
  return knex.schema.createTable("photos", function(t) {
    t.increments('id').primary();
    t.text('keywords');
    t.text('title');
    t.text('description');
    t.text('category');
    t.integer('editorial');
    t.integer('illustration');
    t.integer('adult');
    t.timestamps();
  })

  // keywords: [],
  // title: "", 
  // description: "",
  // agencies: [], 
  // // category: ['category 1', 'category 3', 'category 4'], // ['eee', 'fff', 'ggg', 'hhh', 'iii'], 
  // category: '', // ['eee', 'fff', 'ggg', 'hhh', 'iii'], 
  // releaseForm: "", 
  // editorial: false, 
  // illustration: false, 
  // adult: false, 
};

exports.down = function(knex) {
  // knex.schema.dropTable("photos"); 
};
