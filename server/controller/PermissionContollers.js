const {Permission} = require('../schema/Schemas');
const Permissions = {
    addPermission: async(req, res)=>{
            try {
                const { name } = req.body;
                const permission = await Permission.findOne({ name });
                if (permission) {
                    return res.status(400).send('Ce permission existe déjà');
                }
        
                const newPerm = await Permission.create({ name });
                console.log(newPerm);
                return res.status(201).send('Le permission a été créé avec succès');
            } catch (error) {
                console.error(error);
                 res.status(500).send('Erreur interne du serveur');
            }
        },
        getAllPermissions: async(req, res)=>{
            try{
                const permission = await Permission.find();
                if(permission.length == 0){
                    res.send('il y\'a pas des Permissions')
                }
                res.status(200).send(permission);
             } catch(e){
                console.log(e.message);
                res.status(500).send('Erreur interne du serveur');
             } 
                
            
        },
        deletePermission: async(req,res)=>{
            try{
                const {name}= req.params;
                const result = await Permission.findOne({name})
                if(!result){
                    res.status(404).send('ce Permission est introuvable')
                }
                const Dresult = await Permission.deleteOne({name})
                if(!Dresult){
                    res.status(400).send('le Permission n\'est pas supprimé')
                }
                res.status(200).send('le Permission est supprimé')
            }catch(e){
                console.log(e.message);
                res.status(500).send('Erreur interne du serveur'); 
            }
        },
        updatePermission: async (req, res) => {
            try {
                const Oldname = req.params.name;
                const { name } = req.body;
                const existingPerm = await Permission.findOne({ name: Oldname });
                if (!existingPerm) {
                    return res.status(404).send('Ce permission est introuvable');
                }
                const result = await Permission.updateOne({ name: Oldname }, { name: name });
                if (result.nModified < 1) {
                    return res.status(400).send('Le permission n\'a pas été mis à jour');
                }
        
                return res.status(200).send('Le permission a été mis à jour avec succès');
            } catch (error) {
                console.error(error);
                return res.status(500).send('Erreur interne du serveur');
            }
        },
        getPermission: async(req,res)=>{
            try{
                const {name}= req.params;
                const permission = await Permission.findOne({
                    name
                });
                if(!permission){
                    res.status(404).send('ce Permission est introuvable')
                }
                res.status(200).send(permission);
             } catch(e){
                console.log(e.message);
                res.status(500).send('Erreur interne du serveur');
             }
        }
    }
module.exports= Permissions;