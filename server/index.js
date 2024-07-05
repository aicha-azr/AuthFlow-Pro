const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); // Import bodyParser

const { PORT } = process.env;
const app = express();

const connection = require('./connection/connection');
const router = require('./router/routers');
const routerRole = require('./router/RoleRouters');
const routerPermission = require('./router/PermissionRouters');
const verifyToken = require('./middleware/verifyToken');
const { User, Role } = require('./schema/Schemas'); // Import User and Role

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/', router);
app.use('/', routerRole);
app.use('/', routerPermission);
router.post('/', verifyToken);

// Start the server
app.listen(PORT, () => {
  console.log(`The server is listening at: http://localhost:${PORT}`);
});
