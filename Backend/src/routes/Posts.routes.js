const express = require('express');
const router = express.Router();

const postsControllers = require('../controllers/Posts.controllers');
const multerMiddlewares = require('../middlewares/Multer.middlewares');

router.post('/uploadImage', multerMiddlewares.uploadFiles, postsControllers.uploadImage);
router.post('/createPosts', postsControllers.createPosts);
router.post('/getPosts', postsControllers.getPosts);
router.post('/getAllPosts', postsControllers.getAllPosts);
router.put('/updatePosts', postsControllers.updatePosts);
router.delete('/deletePosts', postsControllers.deletePosts);

module.exports = router;