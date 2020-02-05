const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
    avatar: String
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;