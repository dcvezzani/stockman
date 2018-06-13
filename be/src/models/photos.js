import db from './../../db'

const model = {
	all: (callback) => {
		db('photos').select()
		.orderBy('title', 'asc')
		.asCallback((err, rows) => {
			if (err) return callback({msg: 'Unable to fetch records', raw: err.toString()});
			callback(err, rows);
		});
	},
	show: (id, callback) => {
		db('photos').select()
		.where({id})
		.asCallback((err, rows) => {
			if (err) return callback({msg: 'Unable to fetch record', raw: err.toString()});
			if (rows.length === 0) return callback({msg: "Record doesn't exist"});
			callback(err, rows[0]);
		});
	},
	update: (id, attrs, callback) => {
		console.log("update", id, attrs);
		db('photos')
		.where({id})
		.update(attrs)
		.asCallback((err, rows) => {
			if (err) return callback({msg: 'Unable to update record(s)', err});
			callback(err, rows);
		});	
	},
};

export default model;

