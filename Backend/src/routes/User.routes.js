const express = require('express');
const router = express.Router();
const multer = require('multer');

const userControllers = require('../controllers/User.controllers');
const upload = multer({ dest: '/tmp/' });

router.post('/uploadImage', upload.single('file'), userControllers.uploadImage);

module.exports = router;