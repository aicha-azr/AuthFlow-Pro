const mongoose = require('mongoose');
const express = require('express');
const routerRole = express.Router();
const Roles = require('../controller/RoleControllers');
const verifyToken = require('../middleware/verifyToken');

routerRole.post('/role', verifyToken, Roles.addRole);
routerRole.get('/role/:name', verifyToken, Roles.getRole);
routerRole.get('/role', verifyToken, Roles.getAllRoles);
routerRole.delete('/role/:name', verifyToken, Roles.deleteRole);
routerRole.put('/role/:name', verifyToken, Roles.updateRole);
module.exports = routerRole;