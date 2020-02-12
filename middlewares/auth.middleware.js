const User = require('../database/models/user.model');

module.exports.requireAuth = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if(error || !user){
            res.redirect('/auth/login');
            return;
        }
    
        res.locals.user = user;

        next();
    });
};