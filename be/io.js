import socketIo from 'socket.io';
import db from './db';
import exif from './exiftool';
import fs from 'fs';
import _ from 'lodash';

function reportError(err, msg) {
  console.log(msg, err);
}

function filterObj(obj, exclude=[]) {
  let newObj = {};
  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (!_.includes(exclude, key)) {
      newObj[key] = JSON.parse(JSON.stringify(obj[key]));
    }
  });

  return newObj;
}

export const io = (server) => {
	
	const io = socketIo(server, { path: '/io'});

	io.on('connection', function(client) {  
		console.log('Client connected...');

		client.on('join', function(data) {
			console.log(`join: ${data}`);
			client.emit('joined', 'Greetings program');
		});
			
		client.on('picture-orientation', function(payload) {
      if (!payload.server) return;

      const suffix = payload.image.replace(/http...localhost.8085.stock/, '');

        exif.metadata(`..${suffix}`, function (err, metadata) {
          if (err) return reportError(err, "Unable to get metadata from image");

          console.log(JSON.stringify(metadata));
          client.emit('picture-orientation', {client: true, image: payload.image, suffix, metadata});
        });
		});
			
		client.on('fetch-data', function(payload) {
      if (!payload.server) return;

      db.table("photos").select()
      .asCallback((err, rows) => {
        if (err) return reportError(err, "Unable to fetch photos");
        console.log(rows);
        const data = (rows.length > 0) ? rows[0] : {};
        client.emit('fetch-data', {client: true, ...data});
      });
		});
			
		client.on('save-data', function(payload) {
      if (!payload.server) return;
      const recordId = payload.id;
      const data = filterObj(payload, ['server', 'id']);
      
      db.table("photos")
      .where({id: payload.id})
      .update(data)
      .asCallback((err, rows) => {
        if (err) return reportError(err, "Unable to fetch photos");
        console.log(rows);
        // const data = (rows.length > 0) ? rows[0] : {};
        client.emit('save-data', {client: true, ...rows});
      });
		});
			
	});

};

