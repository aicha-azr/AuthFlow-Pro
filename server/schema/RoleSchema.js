const mongoose = require('mongoose');

const Role = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    permissions: [String]
})
module.exports= mongoose.model(Role, 'Roles');