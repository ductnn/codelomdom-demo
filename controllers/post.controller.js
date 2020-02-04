const mongoose = require('mongoose');
const Post = require('../database/models/post');

module.exports.create = (req, res) => {
    res.render('posts/create');
};

module.exports.post = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('posts/post', {
        post
    });
};

module.exports.store = (req, res) => {
    req.body.image = req.file.path.split('/').slice(1).join('/');
    Post.create(req.body, (error, post) => {
        console.log(req.body.image)
        res.redirect('/')
    });
};