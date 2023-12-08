const mongoose = require("mongoose");
const { userSchema } = require("./User.models");
const { commentSchema } = require("./Comments.models");

const postsSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: userSchema,
    createdAt: { type: Date, default: Date.now },
    image: { type: String, required: false, unique: false },
    comments: [commentSchema],
    impressions: { type: Number, required: false, unique: false },
    numberOfLikes: { type: Number, required: false, unique: false },
    numberOfRetweets: { type: Number, required: false, unique: false },
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = {
  postsSchema,
  Posts,
};
