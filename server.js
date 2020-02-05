const express = require ('express');
const body_parser = require ('body-parser');
const app = express();
var connection = require('./conexionBase.js');
const routerCarro= require('./Rutas/rutaCarro')

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.use('/',routerCarro)

var port = process.env.PORT || 3000

app.listen(port ,()=>{

  console.log('Bien ')
})
