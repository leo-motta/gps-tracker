const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Adicione um nome']
    },
    email: {
        type: String,
        required: [true, 'Adicione um email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Adicione uma senha']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)