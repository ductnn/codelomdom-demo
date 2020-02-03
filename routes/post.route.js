const express = require('express');
const path = require('path');
const multer = require('multer');

const Post = require('../database/models/post');
const fileUpload = multer({ dest: './public/posts' });
const controller = require('../controllers/post.controller');

const router = express.Router();



router.get('/', controller.create);
router.get('/:id', controller.post);
router.post('/store', fileUpload.single('image'), controller.store);

// router.post("/store", (req, res) => {
//     const {
//         image
//     } = req.files
 
//     image.mv(path.resolve(__dirname, 'public/posts', image.name), (error) => {
//         Post.create({
//             ...req.body,
//             image: `/posts/${image.name}`
//         }, (error, post) => {
//             res.redirect('/');
//         });
//     })
// });


module.exports = router;