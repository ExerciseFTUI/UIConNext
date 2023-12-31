const { Posts } = require("../models/Posts.models");
const { User } = require("../models/User.models");
const cloudinaryConfig = require("../config/cloudinary.config");

exports.getPosts = async function (body) {
  const { _id } = body;
  const user = await User.findById(_id);
  if (!user) {
    throw new Error("User not found");
  }
  const result = await Posts.find({ user });
  if (!result || result.length === 0) {
    throw new Error("Posts not found");
  }
  return { message: "Post found", result };
};

exports.getAllPosts = async function (body) {
  const result = await Posts.find();
  if (!result) {
    throw new Error("Posts not found");
  }
  return { message: "Posts found", result };
};

exports.createPosts = async function (file, body) {
  const { ...posts } = body;
  if (posts.content === null || posts.content === undefined) {
    throw new Error("Please specify content");
  }
  if (posts.user_id === null || posts.user_id === undefined) {
    throw new Error("Please specify user_id");
  }
  const upload = file ? await cloudinaryConfig.uploads(file.buffer) : "empty";
  if (!upload) {
    throw new Error("Image failed to be uploaded");
  }
  const user = await User.findById(posts.user_id);
  if (!user) {
    throw new Error("User not found");
  }
  const result = await Posts.create({
    ...posts,
    user,
    image: upload === "empty" ? null : upload.url,
  });
  await result.save();
  return { message: "Post created", result };
};

exports.addComments = async function (file, body) {
  const { ...posts } = body;
  if (posts._id === null || posts._id === undefined) {
    throw new Error("Please specify _id");
  }
  if (posts.content === null || posts.content === undefined) {
    throw new Error("Please specify content");
  }
  if (posts.user_id === null || posts.user_id === undefined) {
    throw new Error("Please specify user_id");
  }
  const upload = file ? await cloudinaryConfig.uploads(file.buffer) : "empty";
  if (!upload) {
    throw new Error("Image failed to be uploaded");
  }
  const user = await User.findById(posts.user_id);
  if (!user) {
    throw new Error("User not found");
  }
  const result = await Posts.findByIdAndUpdate(
    posts._id,
    {
      $push: {
        comments: {
          ...posts,
          user,
          image: upload === "empty" ? null : upload.url,
        },
      },
      $inc: {
        impressions: 1,
      },
    },
    { new: true }
  );
  if (!result || result.length === 0) {
    throw new Error("Posts not found");
  }
  return { message: "Comment added", result };
};

exports.addLikes = async function (body) {
  const { _id } = body;
  const result = await Posts.findByIdAndUpdate(
    _id,
    {
      $inc: {
        impressions: 1,
        numberOfLikes: 1,
      },
    },
    { new: true }
  );
  if (!result || result.length === 0) {
    throw new Error("Posts not found");
  }
  return { message: "Likes added", result };
};

exports.addRetweets = async function (body) {
  const { _id } = body;
  const result = await Posts.findByIdAndUpdate(
    _id,
    {
      $inc: {
        impressions: 1,
        numberOfRetweets: 1,
      },
    },
    { new: true }
  );
  if (!result || result.length === 0) {
    throw new Error("Posts not found");
  }
  return { message: "Retweets added", result };
};

exports.deletePosts = async function (body) {
  const { _id } = body;
  const result = await Posts.findByIdAndDelete(_id);
  if (!result || result.length === 0) {
    throw new Error("Posts not found");
  }
  return { message: "Post deleted", result };
};

// exports.filterCategory = async function (body) {
//     const { category } = body;
//     const
