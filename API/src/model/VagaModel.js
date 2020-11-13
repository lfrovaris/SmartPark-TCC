const mongoose = require ('../config/database');
const Schema = mongoose.Schema;

const VagaSchema = new Schema({
    macAddress: {type:String, required: true },
    latitude: {type:Number, required: false },
    longitude: {type:Number, required: false  },
    ocupado: {type:Boolean, default: false },
    });

module.exports = mongoose.model('Vaga', VagaSchema);