module.exports.store = (req, res, next) => {
    const errors = [];

    if(!req.body.username){
        errors.push('username is required')
    }

    if(!req.body.title){
        errors.push('title is required')
    }

    if(!req.body.description){
        errors.push('description is required')
    }

    if(!req.body.content){
        errors.push('content is required')
    }

    if(errors.length){
        res.render('posts/create', {
            errors: errors,
            values: req.body
        });
        return;
    }

    next();
};