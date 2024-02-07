const express = require('express');
require('dotenv').config();
require('./connection/connection')
const {PORT} = process.env
const app = express();


app.listen(PORT, ()=>{
    console.log(`the port is listening at: http://localhost:${PORT} `)
})