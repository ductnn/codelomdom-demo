const mongoose = require('mongoose');
const User = require('../database/models/user.model');

module.exports.index = async (req, res) => {
    const user = await User.find(req.body);
    res.render('users/index', {
        user
    });
};

module.exports.create = (req, res) => {
    res.render('users/create');
};

module.exports.createUser = (req, res) => {
    User.create(req.body, (error, user) => {
        res.redirect('/users');
    });
};