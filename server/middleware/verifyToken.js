const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const { User } = require("../schema/Schemas");
const {SECRET_KEY} = process.env;
{/*function verifyToken(req, res, next) {
   const token = req.cookies.jwtToken || req.headers.token;
   if (!token) return res.status(401).json({ error: 'Access denied' });
   try {
       const decoded = jwt.verify(token, SECRET_KEY);
       req.userId = decoded.userId;
       req.username = decoded.username;
       req.email = decoded.email; 
      res.json({"username": req.username, "email": req.email});
       next();
   } catch (error) {
       console.log(error.message);
       res.status(401).json({ error: 'Invalid token' });
   }
}*/}
const verifyToken = (req, res) => {
    const token = req.cookies.jwtToken
    console.log(token);
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, SECRET_KEY, async (err, data) => {
       // console.log(data.sub)
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await User.findById(data.sub)
       // console.log(user)
        if (user) return res.json({ status: true, user: user.username, email: user.email })
        else return res.json({ status: false })
      }
    })
  }

  module.exports = verifyToken;