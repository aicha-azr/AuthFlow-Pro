require('dotenv').config();
const mongoose = require('mongoose');
const {URL} = process.env;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase timeout to 45 seconds
  })
.then(console.log('you are connected'))
.catch((error)=>console.log('error:',error));
