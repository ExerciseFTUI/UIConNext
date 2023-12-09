const express = require('express');
const router = express.Router();

const postsControllers = require('../controllers/Posts.controllers');

router.post('/createPosts', postsControllers.createPosts);
router.post('/getPosts', postsControllers.getPosts);
router.post('/getAllPosts', postsControllers.getAllPosts);
router.put('/addComments', postsControllers.addComments);
router.put('/addLikes', postsControllers.addLikes);
router.put('/addRetweets', postsControllers.addRetweets);
router.delete('/deletePosts', postsControllers.deletePosts);

module.exports = router;