const postsServices = require('../services/Posts.services');

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

exports.addComments = async function (req, res) {
    try {
      const result = await postsServices.addComments(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message, result: null });
    }
}

exports.addLikes = async function (req, res) {
    try {
      const result = await postsServices.addLikes(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message, result: null });
    }
}

exports.addRetweets = async function (req, res) {
    try {
      const result = await postsServices.addRetweets(req.body);
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
