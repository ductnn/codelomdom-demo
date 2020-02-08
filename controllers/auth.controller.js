const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../database/models/user.model');

module.exports.login = (req, res) => {
    res.render('auth/login');
};

module.exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    db.findOne({
        email
    }).then((user) => {
        if(!user){
            res.render('auth/login', {
                errors: [
                    'User is not exist'
                ],
                values: req.body
            });
            return;
        } else {
            bcrypt.compare(req.body.password, user.password, (error, result) => {
                if(result){
                    req.session.userId = user._id;
                    res.redirect('/');
                } else{
                    res.render('auth/login', {
                        errors: [
                            'Wrong Password'
                        ],
                        values: req.body
                    });
                    return;
                }
            });
        }
    });
};