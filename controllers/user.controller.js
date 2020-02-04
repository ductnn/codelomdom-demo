const mongoose = require('mongoose');

module.exports.index = (req, res) => {
    res.render('users/index');
};

module.exports.create = (req, res) => {
    res.render('users/create');
};