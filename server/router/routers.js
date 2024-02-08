const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Controller = require('../controller/controllers');
const verifyToken = require('../middleware/verifyToken');

router.post('/signup', Controller.signup);
router.post('/login', Controller.login);

module.exports = router;