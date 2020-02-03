const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    image: String,
    createAt: {
        type: Date, 
        default: new Date()
    }
});

const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;