const mongoose = require('mongoose');
const User = require('../database/models/user.model');

module.exports.index = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/index', {
        user
    });
};

module.exports.create = (req, res) => {
    res.render('users/create');
};

module.exports.createUser = (req, res) => {
    User.create(req.body, (error, user) => {
        if(error) {
            return res.redirect('/users/create');
        }
        console.log(req.body);
        res.redirect('/');
    });
};