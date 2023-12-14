const express = require('express');
const router = express.Router();
const multer = require('multer');

const postsControllers = require('../controllers/Posts.controllers');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/createPosts', upload.single('file'), postsControllers.createPosts);
router.post('/getPosts', postsControllers.getPosts);
router.post('/getAllPosts', postsControllers.getAllPosts);
router.put('/addComments', upload.single('file'), postsControllers.addComments);
router.put('/addLikes', postsControllers.addLikes);
router.put('/addRetweets', postsControllers.addRetweets);
router.delete('/deletePosts', postsControllers.deletePosts);

module.exports = router;