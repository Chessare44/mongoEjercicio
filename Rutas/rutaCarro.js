const express = require ('express'),
      rutas = express.Router(),
      carro = require('../controller/controllerCarro.js');

rutas.use('/carro', carro);

module.exports=rutas;
