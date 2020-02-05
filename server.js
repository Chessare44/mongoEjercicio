const express = require ('express');
const body_parser = require ('body-parser');
const app = express();
var connection = require('./conexionBase.js');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

var port = process.env.PORT || 3000

app.listen(port ,()=>{

  console.log('Bien ')
})
