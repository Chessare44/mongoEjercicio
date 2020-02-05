var carro = require('../modelo/carro.js'),
    express = require('express'),
    rutas = express.Router();

rutas.post('/obtener',(req, res)=>{
  carro.find({}, (error, docs)=>{
    if (error){
      console.error(error)
      throw error;
    }
    res.status(200).json(docs)
  })
}).post('/crear', (req, res) => {
    var body = req.body;
    carro.insertMany({
      id: body.id,
      marca: body.marca,
      modelo: body.modelo,
      color: body.color,
      kilometraje: body.kilometraje,
      placa: body.placa
    }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
}).post('/sumar',(req, res)=>{
  var body=req.body;

  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  const respuesta = (num1+num2);

  res.status(200).json(respuesta);
}).post('/mayor',(req, res)=>{
  var body = req.body;

  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  if (num1>num2){
    res.status(200).json(num1);
  }else{
    res.status(200).json(num2);
  }
})
module.exports = rutas;
