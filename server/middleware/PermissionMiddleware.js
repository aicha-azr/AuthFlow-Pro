const jwt = require("jsonwebtoken");
const Role = require('../schema/Schemas');
require('dotenv').config();
const {SECRET_KEY} = process.env;
const checkPermissionMiddleware = async(req, res, next) => {
    try{
        const {userPermission}= req.params;

        const token = req.cookies.jwtToken;
        const decoded = jwt.verify(token, SECRET_KEY);
        req.userId = decoded.userId;
        const { username, email, role} = decoded;
    
        const userrole = await Role.findOne({ name: role }).populate('permissions');
        const permissions = userrole.permissions.map(permission => permission.name);
        const existper = permissions.includes(userPermission)
            if(!existper){
                res.status(403).json({ message: `Vous n\'avez pas la permission de ${userPermission}` });
            }
            
            next();
        }catch(e){
            console.log(e.message)
        }
    }

module.exports = checkPermissionMiddleware;
