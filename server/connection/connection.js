require('dotenv').config();
const mongoose = require('mongoose');
const {URL} = process.env;

mongoose.connect(URL)
.then(console.log('you are connected'))
.catch((error)=>console.log('error:',error));
