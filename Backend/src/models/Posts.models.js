const mongoose = require("mongoose");
const { userSchema } = require("./User.models");

const postsSchema = new mongoose.Schema();
postsSchema.add({
	content: { type: String, required: true },
	user: userSchema,
	createdAt: { type: Date, default: Date.now },
	image: { type: String, required: false, unique: false },
	comments: [postsSchema],
	impressions: { type: Number, required: false, unique: false, default: 0 },
	numberOfLikes: { type: Number, required: false, unique: false, default: 0 },
	numberOfRetweets: {
		type: Number,
		required: false,
		unique: false,
		default: 0,
	},
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = {
	postsSchema,
	Posts,
};
