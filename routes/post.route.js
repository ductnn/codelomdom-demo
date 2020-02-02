const express = require('express');
const path = require('path');
const post = require('../database/models/post');
const fileUpload = require('express-fileupload');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('posts/create')
});

router.get('/:id', async (req, res) => {
    const Post = await post.findById(req.params.id)
    res.render('posts/post', {
        Post
    });
});


router.post('/store', (req, res) => {
    post.create(req.body, (error, post) => {
        res.redirect('/')
    })
});


module.exports = router;