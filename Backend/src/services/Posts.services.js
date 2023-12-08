const { Posts } = require("../models/Posts.models");
const { User } = require("../models/User.models");
const cloudinaryConfig = require("../config/cloudinary.config");

exports.uploadImage = async function (files, body) {
  // const { _id } = body;
  // if(_id !== null || _id !== undefined) {
  //   return { message: "Please specify _id", result: null };
  // }
  const result = await cloudinaryConfig.uploads(files[0].path);
  // const user = await User.findOneAndUpdate({_id}, {
  //   profile_url: result.url,
  // });
  return { message: "Image uploaded", result };
};

exports.createPosts = async function (body) {
  const { ...posts } = body;
  if(posts.content === null || posts.content === undefined) {
    throw new Error("Please specify message");
  }
  if(posts.user_id === null || posts.user_id === undefined) {
    throw new Error("Please specify user_id");
  }
  console.log({...posts});
  const result = await Posts.create({
    ...posts,
  });
  await result.save();
  return { message: "Post created", result };
}

exports.getPosts = async function (body) {
  const { _id } = body;
  const user = await User.findById(_id);
  if (!user) {
    throw new Error("User not found");
  }
  const result = await Posts.find({user_id: _id});
  if (!result) {
    throw new Error("Posts not found");
  }
  return { message: "Post found", result };
}

exports.getAllPosts = async function (body) {
  const result = await Posts.find();
  if (!result) {
    throw new Error("Posts not found");
  }
  return { message: "Posts found", result };
}

exports.updatePosts = async function (body) {
  const { _id, ...posts } = body;
  const result = await Posts.findByIdAndUpdate(_id, {
    ...posts,
  }, {new: true});
  if (!result) {
    throw new Error("Posts not found");
  }
  return { message: "Post updated", result };
}

exports.deletePosts = async function (body) {
  const { _id } = body;
  const result = await Posts.findByIdAndDelete(_id);
  if (!result) {
    throw new Error("Posts not found");
  }
  return { message: "Post deleted", result };
}