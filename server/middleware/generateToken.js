const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

function generateJwtToken(req, res, next) {
  const { user } = req; // Assumption: user object is attached to the request
  const payload = {
    sub: user._id,
    name: user.name,
    email: user.email
  };
  const secretKey = SECRET_KEY;
  const options = {
    expiresIn: '1d',
  };
  const token = jwt.sign(payload, secretKey, options);

  // Set the token as a cookie named "jwtToken"
  res.cookie('jwtToken', token, { 
    maxAge: 86400 * 1000, // Expires in 1 day (in milliseconds)
    secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
    sameSite: 'strict' // Ensures the cookie is sent only in a first-party context
  });

  next();
}

module.exports = generateJwtToken;
