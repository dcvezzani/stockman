
exports.up = function(knex, Promise) {
	return knex.schema.alterTable('photos', function(table) {
    table.text('release_form_location');
    table.text('release_form_name');
    table.text('location');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.alterTable('photos', function(table) {
		table.dropColumn('release_form_location');
		table.dropColumn('release_form_name');
		table.dropColumn('location');
	})
};
