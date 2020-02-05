const express = require('express');

const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');

const router = express.Router();

router.get('/create', controller.create);
router.get('/:id', controller.index);
router.post('/create', validate.createUser, controller.createUser);

module.exports = router;
