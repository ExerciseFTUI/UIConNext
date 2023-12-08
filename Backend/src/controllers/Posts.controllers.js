const postsServices = require('../services/Posts.services');

exports.uploadImage = async function (req, res) {
    try {
      const result = await postsServices.uploadImage(req.files, req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message, result: null });
    }
}

exports.createPosts = async function (req, res) {
    try {
      const result = await postsServices.createPosts(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message, result: null });
    }
}

exports.getPosts = async function (req, res) {
    try {
      const result = await postsServices.getPosts(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message, result: null });
    }
}

exports.getAllPosts = async function (req, res) {
    try {
      const result = await postsServices.getAllPosts(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message, result: null });
    }
}

exports.updatePosts = async function (req, res) {
    try {
      const result = await postsServices.updatePosts(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message, result: null });
    }
}

exports.deletePosts = async function (req, res) {
    try {
      const result = await postsServices.deletePosts(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message, result: null });
    }
}
