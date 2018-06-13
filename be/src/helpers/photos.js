import photos from './../models/photos'

export const fetchPhoto = (id, callback) => {
	console.log("fetchPhoto:id", id);
	photos.show(id, (err, photo) => {
		if (err) return callback(err);
		if (photo === null) return callback(new Error("No records found"));

		photo.releaseForm = (photo.releaseFormName) ? {name: photo.releaseFormName, location: photo.releaseFormLocation} : null;
		callback(null, photo);
	});
};

export const fetchPhotos = (callback) => {
	photos.all((err, rows) => {
		if (err) return callback(err);
		if (rows.length === 0) return callback(new Error("No records found"));

		callback(null, rows);
	});
};

export const prepareAttrs = (attrs, fileData) => {
	const attrNames = JSON.parse(attrs.attrNames);
	let preparedAttrs = attrNames.reduce((acc, attr) => ({...acc, [attr]: JSON.parse(attrs[attr])}), ({}));
	['editorial', 'illustration', 'adult'].forEach(attr => {
		preparedAttrs[attr] = (preparedAttrs[attr] === true || preparedAttrs[attr] === 1) ? 1 : 0;
	});
	// console.log("preparedAttrs", {...preparedAttrs, ...fileData});
	return {...preparedAttrs, ...fileData};
};

export const saveFiles = (files, callback) => {
  // if (!files) return callback(new Error("No files were uploaded"), {status: 400});
  if (!files) return callback(null, {success: "No file to upload", fileLocation: null});
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let releaseForm = files.releaseForm;
 
  // Use the mv() method to place the file somewhere on your server
	const fileLocation = `/Users/dcvezzani/Downloads/${releaseForm.name}`;
  releaseForm.mv(fileLocation, function(err) {
    if (err)
			return callback(new Error("File was not uploaded"), {status: 500, err});
 
    callback(null, {success: "File uploaded", fileLocation});
  });
};
