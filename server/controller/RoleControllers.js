const mongoose = require('mongoose');
const {Role} = require('../schema/Schemas');
const Roles = {
    addRole: async (req, res) => {
        try {
            const { name} = req.body;
    
            // Vérifier si le rôle existe déjà
            const role = await Role.findOne({ name });
            if (role) {
                return res.status(400).send('Ce rôle existe déjà');
            }
    
            // Créer un nouveau rôle
            const newRole = await Role.create({ name});
            console.log(newRole);
    
            // Envoyer une réponse une fois que le rôle est créé avec succès
            return res.status(201).send('Le rôle a été créé avec succès');
        } catch (error) {
            console.error(error);
             res.status(500).send('Erreur interne du serveur');
        }
    },
    getAllRoles: async(req, res)=>{
        try{
            const role = await Role.find();
            if(role.length == 0){
                res.send('il y\'a pas des roles')
            }
            res.status(200).send(role);
         } catch(e){
            console.log(e.message);
            res.status(500).send('Erreur interne du serveur');
         } 
            
        
    },
    deleteRole: async(req,res)=>{
        try{
            const {name}= req.params;
            const result = await Role.findOne({name})
            if(!result){
                res.status(404).send('ce role est introuvable')
            }
            const Dresult = await Role.deleteOne({name})
            if(!Dresult){
                res.status(400).send('le role n\'est pas supprimé')
            }
            res.status(200).send('le role est supprimé')
        }catch(e){
            console.log(e.message);
            res.status(500).send('Erreur interne du serveur'); 
        }
    },
    updateRole: async (req, res) => {
        try {
            const Oldname = req.params.name;
            const { name, permissions } = req.body;
    
            // Vérifier si le rôle existe
            const existingRole = await Role.findOne({ name: Oldname });
            if (!existingRole) {
                return res.status(404).send('Ce rôle est introuvable');
            }
    
            // Mettre à jour le rôle
            const result = await Role.updateOne({ name: Oldname }, { name: name, permissions});
            if (result.nModified < 1) {
                return res.status(400).send('Le rôle n\'a pas été mis à jour');
            }
    
            return res.status(200).send('Le rôle a été mis à jour avec succès');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Erreur interne du serveur');
        }
    },
    getRole: async(req,res)=>{
        try{
            const {name}= req.params;
            const role = await Role.findOne({
                name
            });
            if(!role){
                res.status(404).send('ce role est introuvable')
            }
            res.status(200).send(role);
         } catch(e){
            console.log(e.message);
            res.status(500).send('Erreur interne du serveur');
         }
    }
}
module.exports = Roles;