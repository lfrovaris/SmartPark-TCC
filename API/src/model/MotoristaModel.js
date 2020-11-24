const mongoose = require ('../config/database');
const VagaModel = require('./VagaModel');
const Schema = mongoose.Schema;

const MotoristaSchema = new Schema({
    id: {type: mongoose.Types.ObjectId, required: false},
    name: {type:String, required: true },
    email: {type:String, required: true },
    password: {type:String, required: true },
    vagasFavoritas:[{type: String,  required: false}]
});

module.exports = mongoose.model('Motorista', MotoristaSchema);