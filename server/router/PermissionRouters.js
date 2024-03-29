const express = require('express');
const routerPermission = express.Router();
const Permissions = require('../controller/PermissionContollers');
const verifyToken = require('../middleware/verifyToken');
const checkPermissionMiddleware = require('../middleware/PermissionMiddleware');
routerPermission.post('/:permission', verifyToken, checkPermissionMiddleware, Permissions.addPermission);
routerPermission.get('/:permission/:name', verifyToken, checkPermissionMiddleware, Permissions.getPermission);
routerPermission.get('/:permission', verifyToken, checkPermissionMiddleware, Permissions.getAllPermissions);
routerPermission.delete('/:permission/:name', verifyToken, checkPermissionMiddleware, Permissions.deletePermission);
routerPermission.put('/:permission/:name', verifyToken, checkPermissionMiddleware, Permissions.updatePermission);
module.exports = routerPermission;