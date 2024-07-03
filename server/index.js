const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { PORT } = process.env;
const app = express();
const connection = require('./connection/connection');
const router = require('./router/routers');
const { User, Role } = require('./schema/Schemas'); // Importer à la fois User et Role
app.use(cookieParser());
app.use(express.json());
const bodyParser = require('body-parser'); // Importer bodyParser
const routerRole = require('./router/RoleRouters');
const routerPermission = require('./router/PermissionRouters');
app.use(bodyParser.json()); // Pour parser les requêtes JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);
app.use('/', routerRole);
app.use('/', routerPermission);


app.listen(PORT, () => {
  console.log(`the port is listening at: http://localhost:${PORT} `);
});
