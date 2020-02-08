const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
    bcrypt.hash(req.body.password, 10, (error, hash) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash
        }).then((data) => {
            if(data){
                res.redirect('/');
            }
            console.log(req.body);       
        });
    });
    
};