const mongoose = require("mongoose");
const { userSchema } = require("./User.models");

const commentSchema = new mongoose.Schema({
    user: userSchema,
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comments", commentSchema);

module.exports = {
	commentSchema,
	Comment,
};
