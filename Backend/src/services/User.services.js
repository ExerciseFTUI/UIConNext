const { User } = require("../models/User.models");
const cloudinaryConfig = require("../config/cloudinary.config");
const fs = require("fs");

exports.uploadImage = async function (files, body) {
	const { _id } = body;
	if (!_id) {
		throw new Error("Please specify _id");
	}
	const result = await cloudinaryConfig.uploads(files[0].path);
	if (!result) {
		throw new Error("Image failed to be uploaded");
	}
	const user = await User.findOneAndUpdate(
		{ _id },
		{
			image: result.url,
		}
	);
	files.forEach((file) => {
		// Construct the file path
		const filePath = "uploads/" + file.filename;

		// Delete the file
		fs.unlink(filePath, (unlinkErr) => {
			if (unlinkErr) {
				throw new Error(unlinkErr);
			}
		});
	});
	if (!user) {
		throw new Error("User not found");
	}
	return { message: "Image uploaded", result: user };
};
