const express = require ('express'),
      rutas = express.Rutas(),
      carro = require('../controller/controllerCarro.js');

rutas.use('/carro', carro);

module.exports=rutas;
