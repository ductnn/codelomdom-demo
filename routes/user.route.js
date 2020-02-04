const express = require('express');

const controller = require('../controllers/user.controller');

const router = express.Router();


router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/create', controller.createUser);

module.exports = router;
