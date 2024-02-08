const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

function generateToken(user) {
    const payload = {
      sub: user._id,
      name: user.name,
      email: user.email
    };
    const secretKey = SECRET_KEY; // Assurez-vous que SECRET_KEY est défini correctement
    const options = {
      expiresIn: '1d',
    };
    const token = jwt.sign(payload, secretKey, options);
  
    return token; // Retournez le token généré
  }
module.exports = generateToken;
