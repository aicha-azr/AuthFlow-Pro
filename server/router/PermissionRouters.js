const express = require('express');
const routerPermission = express.Router();
const Permissions = require('../controller/PermissionContollers');
const verifyToken = require('../middleware/verifyToken');

routerPermission.post('/permission', verifyToken, Permissions.addPermission);
routerPermission.get('/permission/:name', verifyToken, Permissions.getPermission);
routerPermission.get('/permission', verifyToken, Permissions.getAllPermissions);
routerPermission.delete('/permission/:name', verifyToken, Permissions.deletePermission);
routerPermission.put('/permission/:name', verifyToken, Permissions.updatePermission);
module.exports = routerPermission;