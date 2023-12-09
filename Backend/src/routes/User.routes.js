const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/User.controllers');
const multerMiddlewares = require('../middlewares/Multer.middlewares');

router.post('/uploadImage', multerMiddlewares.uploadFiles, userControllers.uploadImage);

module.exports = router;