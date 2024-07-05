const express = require("express"); 
const mongoose = require('mongoose');
const {User} = require('../schema/Schemas');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const generateToken = require('../middleware/generateToken');
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = process.env;

const Controller = {
  signup: async (req, res) => {
    try {
      const { username, password, email } = req.body;

      // Générer un sel
      const salt = await bcrypt.genSalt(saltRounds);

      // Utiliser le sel pour hacher le mot de passe
      const hashedPassword = await bcrypt.hash(password, salt);

      // Recherche de l'utilisateur existant dans la base de données
      const existingUser = await User.findOne({
        $or: [
          { username: username },
          { email: email }
        ]
      });

      if (existingUser) {
        return res.status(400).json({ message: 'Nom d\'utilisateur ou e-mail déjà utilisé' });
      }

      // Créer un nouvel utilisateur avec le mot de passe haché
      const newUser = new User({ username: username, password: hashedPassword, email: email });
      await newUser.save();

      res.status(201).json({ message: 'Compte créé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la création du compte' });
    }
  }, 
  login: async (req, res) => {
    try {
      const { username, password, email } = req.body;
  
      // Recherche de l'utilisateur par nom d'utilisateur ou e-mail
      const user = await User.findOne({
        $or: [
          { username: username },
          { email: email }
        ]
      });
  
      // Vérification de l'existence de l'utilisateur
      if (!user) {
        return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }
  
      // Vérification du mot de passe
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      // Si le mot de passe ne correspond pas
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }
  
      // Génération du token JWT
      const token = generateToken(user);
  
      // Définition du cookie JWT
      res.cookie('jwtToken', token, { 
        maxAge: 86400 * 1000, // Expires in 1 day (in milliseconds)
        secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
        sameSite: 'strict', // Ensures the cookie is sent only in a first-party context
        withCredentials: true,
        httpOnly: false,
      });
  
      // Réponse avec succès
      res.status(200).json({ message: 'Authentification réussie', token: token });
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de l\'authentification:', error);
      res.status(500).json({ message: 'Erreur lors de l\'authentification' });
    }
  },
  home: async (req, res) => {
    
    const { username, email } = req; 
    res.send(`Welcome to Master Task\nYour username: ${username}\nYour email: ${email}`);
  }
}

module.exports = Controller;
