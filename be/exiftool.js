import fs from 'fs';
import { spawn } from 'child_process';

const parseMetadata = (buffer) => {
  const lines = buffer.toString().split(/\n/).filter(line => line.match(/Orientation/));
  const line = lines[0].toLowerCase().replace(/ +/g, '-');
  const json = line.replace(/^([^-]+)-:-(.*)$/, '{"$1": "$2"}');
  // const key = lines[0].replace(/^([^ ]+).*$/, '$1');
  // const value = lines[0].replace(/^[^ ]+ [^:]+: (.*)$/, '$1');

  console.log({json});
  return JSON.parse(json);
};

const metadata = (filename, callback) => {
  const suffix = filename.replace(/http...localhost.8085.stock/, '');

  fs.readFile(`${suffix}`, function (err, data) {
    if (err) return callback(err);

    // callback(null, {ok: true});

    const exiftool = spawn( 'exiftool', [ filename ] );

    exiftool.stdout.on( 'data', data => {
      const resp = parseMetadata(data);
      // console.log({data: data.toString()});
      callback(null, resp);
    } );

    exiftool.stderr.on( 'data', data => {
      callback(new Error(`${data}`));
    } );

    exiftool.on( 'close', code => {
        console.log( `child process exited with code ${code}` );
    } );

  // exif.metadata(data, function (err, metadata) {
  });
};

export default {metadata};
