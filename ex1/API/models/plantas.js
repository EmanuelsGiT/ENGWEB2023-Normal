const mongoose = require('mongoose')


var plantasSchema = new mongoose.Schema({

    _id: Number,
    NumeroRegisto: Number,
    CodigoRua: Number,
    Rua: String,
    Local: String,
    Freguesia: String,
    Especie: String,
    NomeCientifico: String,
    Origem: String,
    DataPlantacao: String,
    Estado: String,
    Caldeira: String,
    Tutor: String,
    Implantacao: String,
    Gestor: String,
    DataActualizacao: String,
    NumeroIntervencoes: Number
});

module.exports = mongoose.model('plantas', plantasSchema)