const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o esquema
const taskSchema = new Schema({
    nomeT: {
        type: String,
        required: true
    },
    conclusao: {
        type: Boolean,
        default: false
    }
});

// Exportando o esquema
module.exports = mongoose.model('Task', taskSchema);
