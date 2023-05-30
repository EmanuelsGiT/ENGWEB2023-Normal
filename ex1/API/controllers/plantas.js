var Plantas = require('../models/plantas')

// GET /plants
module.exports.list = () => {
    return Plantas
            .find()
            .sort({data:-1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.especieEEEE = (especie) => {
    return Plantas
    .find({$or: [{Especie:{$regex: especie, $options: 'i' }}]})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })

};

module.exports.implantAAA = (implant) => {
    return Plantas
    .find({$or: [{Implantacao:{$regex: implant, $options: 'i' }}]})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })

};


module.exports.distinctFreguesias = () => {
    return Plantas.distinct("Freguesia")
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.distinctEspecies = () => {
    return Plantas.distinct("Especie") 
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}
  
// GET /plantas/:id
module.exports.getPlantas = id => {
    return Plantas.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

// POST /plantas
module.exports.addPlantas = l => {
    return Plantas.create(l)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

// Delete /plantas/:id
module.exports.deletePlantas = id => {
    return Plantas.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

