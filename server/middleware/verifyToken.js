const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = process.env;
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(token, SECRET_KEY);
     req.userId = decoded.userId;
     next();
     } catch (error) {
        console.log(error.message);
     res.status(401).json({ error: 'Invalid token' });
     }
     };


module.exports = verifyToken