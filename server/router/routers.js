const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Controller = require('../controller/controllers');
const verifyToken = require('../middleware/verifyToken');
const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = process.env;
router.post('/signup', Controller.signup);
router.post('/login', Controller.login);
router.get('/home', verifyToken, Controller.home);
module.exports = router;