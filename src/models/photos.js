
export const fetchPhoto = (id, callback) => {
  fetch(`http://localhost:3000/photos/${id}`, { // Your POST endpoint
    method: 'GET',
    headers: {
      // "Content-Type": "You will perhaps need to define a content-type here"
    },
    // body: formData,
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => {
			console.log("success", success) // Handle the success response object
			callback(null, success.record);
		}
  ).catch(
    error => {
			console.log("error", error) // Handle the error response object
			callback(error);
		}
  );
};

export const fetchPhotos = (callback) => {
  fetch('http://localhost:3000/photos/', { // Your POST endpoint
    method: 'GET',
    headers: {
      // "Content-Type": "You will perhaps need to define a content-type here"
    },
    // body: formData,
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => {
			console.log("success", success) // Handle the success response object
			callback(null, success.rows);
		}
  ).catch(
    error => {
			console.log("error", error) // Handle the error response object
			callback(error);
		}
  );
};

export const updatePhoto = (id, attrs, callback) => {
	let formData = new FormData();
	let attrNames = Object.keys(attrs).filter(attr => !['releaseForm', 'id'].includes(attr));

	formData.append('attrNames', JSON.stringify(attrNames));
	formData.append('releaseForm', attrs.releaseForm);

	attrNames.forEach(attr => formData.append(attr, JSON.stringify(attrs[attr])));

  fetch(`http://localhost:3000/photos/${id}`, { // Your POST endpoint
    method: 'PUT',
    headers: {
      // "Content-Type": "You will perhaps need to define a content-type here"
    },
    body: formData,
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => {
			console.log("success", success) // Handle the success response object
			callback(null);
		}
  ).catch(
    error => {
			console.log("error", error) // Handle the error response object
			callback(error);
		}
  );
};
