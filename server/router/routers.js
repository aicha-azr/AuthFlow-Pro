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
router.get('/home', verifyToken,async(req, res)=>{
    const token = req.cookies.jwtToken;
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.userId;
    const { username, email } = decoded;
     res.send(`welcome to master Task \n your username: ${username} \n your email: ${email}`)

});
module.exports = router;