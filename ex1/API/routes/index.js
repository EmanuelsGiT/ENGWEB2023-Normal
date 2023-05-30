var express = require('express');
var router = express.Router();
var Lista = require('../controllers/plantas')

// GET: os vários pedidos
router.get('/plantas', function(req, res, next) {
  if(req.query.especie){
    console.log("especie")
    Lista.especieEEEE(req.query.especie)
      .then(plantas=>{
        res.jsonp(plantas)
      })
      .catch(erro=>{
        res.jsonp({error:erro, message:"Erro na obtencao do contrato"})
    })
    
  } else if(req.query.implant){
      console.log("implant")
      Lista.implantAAA(req.query.implant)
        .then(plantas=>{
          res.jsonp(plantas)
        })
        .catch(erro=>{
          res.jsonp({error:erro, message:"Erro na obtencao da lista de plantas"})
      })

  } else {
    console.log("listaplantas")
      Lista.list()
        .then(plantas => {
          res.json(plantas)
        })
        .catch(erro => {
          res.jsonp({error: erro, message: "Erro na obtenção da lista de plantas"})
      })
  }
});

router.get('/plantas/freguesias', function(req, res, next) {
  Lista.distinctFreguesias()
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      console.log("Erro na obtenção das freguesias: " + erro)
    })
});

router.get('/plantas/especies', function(req, res, next) {
  Lista.distinctEspecies()
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      console.log("Erro na obtenção das especies: " + erro)
    })
});

router.get('/plantas/:id', function(req, res, next) {
  Lista.getPlantas(req.params.id)
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      console.log("Erro na obtenção das listas de plantas: " + erro)
    })
});

router.post('/plantas', function(req, res) {
  Lista.addPlantas(req.body)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção da lista"})
    })
})

router.delete('/plantas/:id', function(req, res) {
  Lista.deletePlantas(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção de um produto"})
    })
})

module.exports = router;
