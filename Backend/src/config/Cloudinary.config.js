const cloudinary = require("cloudinary").v2;

exports.connect = () => cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.uploads = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      { folder: "uiconnext", resource_type: "auto" }, // Set the folder parameter
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({ url: result.url, id: result.public_id });
        }
      }
    );
  });
};
