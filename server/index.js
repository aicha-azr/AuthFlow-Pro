const express = require('express');
const mongoose= require('mongoose');
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

app.use('/', router);
app.use('/', routerRole);
app.use('/', routerPermission);
const createUser = async () => {
  try {
    await connection; // Attendez que la connexion soit établie
     // Créer les rôles
     const userRole = await Role.create({
        name: 'user',
        permissions: ['ADD_TASK', 'GET_TASK', 'DELETE_TASK', 'UPDATE_TASK', 'GET_ALL_TASKS']
      },
      {
        name:'admin',
        permissions: ['ADD_TASK', 'GET_TASK', 'DELETE_TASK', 'UPDATE_TASK', 'GET_ALL_TASKS', 'ADD_USER', 'DELETE_USER', 'UPDATE_USER', 'GET_USER', 'GET_ALL_USERS']
      });
    // Récupérer le rôle approprié avant de créer l'utilisateur
    const role = await Role.findOne({ name: 'user' }); // Remplacez 'user' par le nom du rôle approprié
    if (!role) {
      console.error('Role not found');
      return;
    }
    const user = await User.create({
      username: 'aicha',
      email: 'aichaazeroual03@gmail.com',
      password: '12345',
      roles: [role._id] // Utiliser l'ID du rôle
    });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};

//createUser();

app.listen(PORT, () => {
  console.log(`the port is listening at: http://localhost:${PORT} `);
});
