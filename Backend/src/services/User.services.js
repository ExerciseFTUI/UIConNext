const { User } = require("../models/User.models");
const cloudinaryConfig = require("../config/cloudinary.config");
const fs = require("fs");

exports.uploadImage = async function (file, body) {
	const { _id } = body;
	if (!_id) {
		throw new Error("Please specify _id");
	}
	if (!file) {
		throw new Error("Please specify image");
	}
	const result = await cloudinaryConfig.uploads(file.buffer);
	if (!result) {
		throw new Error("Image failed to be uploaded");
	}
	const user = await User.findOneAndUpdate(
		{ _id },
		{
			image: result.url,
		},
		{ new: true }
	);
	if (!user) {
		throw new Error("User not found");
	}
	return { message: "Image uploaded", result: user };
};
