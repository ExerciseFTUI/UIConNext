const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    clerk_id: { type: String, required: false },
    name: { type: String, required: true },
	username: { type: String, required: true, unique: false },
	email: { type: String, required: true, unique: false },
	password: {
		type: String,
		required: false,
	},
	image: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = {
	userSchema,
	User,
};
