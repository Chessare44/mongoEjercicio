var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var carroSchema = new Schema({

  id:{type:Number, trim:true},
  marca:{type:String, trim:true},
  modelo:{type:String, trim:true},
  color:{type:String, trim:true},
  kilometraje:{type:Number, trim:true},
  placa:{type:String, trim:true},
})

var usuario = mongoose.model('carro', carroSchema);

module.exports=usuario;
