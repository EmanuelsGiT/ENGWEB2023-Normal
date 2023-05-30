var express = require('express');
var router = express.Router();
var env = require('../config/env')
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res){
  var data = new Date().toISOString().substring(0,19)
  axios.get("http://localhost:15030/plantas/")
    .then(response => { 
      res.render('listas', { lists: response.data, d: data })
  })
    .catch(err => {
      res.render('error', {error: err})
    })
})

router.get('/especies/:id', function(req, res){
  var data = new Date().toISOString().substring(0,19)
  axios.get("http://localhost:15030/plantas?especie=" + req.params.id)
    .then(response => {  
      res.render('especie',{lists:response.data, d: data})
  })
    .catch(err => {
      res.render('error', {error: err})
    })
})

router.get('/:id', function(req, res){
  var data = new Date().toISOString().substring(0,19)
  axios.get("http://localhost:15030/plantas/" + req.params.id)
    .then(response => {  
      res.render('id',{d:data, l: response.data})
  })
    .catch(err => {
      res.render('error', {error: err})
    })
})

module.exports = router;
