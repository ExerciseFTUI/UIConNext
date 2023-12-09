const cloudinary = require("cloudinary").v2;
const stream = require('stream');

exports.connect = () =>
	cloudinary.config({
		cloud_name: process.env.CLOUD_NAME,
		api_key: process.env.API_KEY,
		api_secret: process.env.API_SECRET,
	});

exports.uploads = (fileBuffer) => {
	return new Promise((resolve, reject) => {
		const uploadStream = cloudinary.uploader.upload_stream(
			{ folder: "uiconnext", resource_type: "auto" }, // Set the folder parameter
			(error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve({ url: result.url, id: result.public_id });
				}
			}
		);

		// Write the buffer to the stream
		const bufferStream = new stream.PassThrough();
		bufferStream.end(fileBuffer);
		bufferStream.pipe(uploadStream);
	});
};
