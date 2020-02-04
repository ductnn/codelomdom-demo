const express = require('express');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/posts/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
});

const fileUpload = multer({ storage: storage });

const Post = require('../database/models/post');
const controller = require('../controllers/post.controller');
const validate = require('../validate/postStore.validate');

const router = express.Router();





router.get('/', controller.create);
router.get('/:id', controller.post);
router.post('/store', 
    fileUpload.single('image'),
    validate.store,
    controller.store
);


module.exports = router;