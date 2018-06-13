var express = require('express');
var router = express.Router();
import photos from '../src/models/photos';
import { fetchPhotos, fetchPhoto, prepareAttrs, saveFiles } from '../src/helpers/photos';

/* GET users listing. */
router.get('/', function(req, res, next) {
	fetchPhotos((err, rows) => {
		// res.send('respond with a resource');
		res.json({ err, rows });
	})
});

router.get('/:id', function(req, res, next) {
	fetchPhoto(req.params.id, (err, record) => {
		// res.send('respond with a resource');
		res.json({ err, record });
	})
});

router.put('/:id', function(req, res, next) {
	// res.json({body: req.body, files: req.files});

	saveFiles(req.files, (err, data) => {
		if (err) return res.status(data.status).json({err, data});

		let fileData = {}
		if (data.fileLocation) {
			const releaseFormName = (req.files && req.files.releaseForm) ? req.files.releaseForm.name : null;
			const releaseFormLocation = data.fileLocation;
			fileData = {releaseFormName, releaseFormLocation};
		}
		photos.update(req.params.id, prepareAttrs(req.body, fileData), (err, rows) => {
			// res.send('respond with a resource');
			res.json({ err, rows });
		});
	});
});


module.exports = router;
