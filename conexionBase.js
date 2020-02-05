var mongoose = require ('mongoose');
var connection = mongoose.connect('mongodb+srv://Chess:ajedrez94@cesarc-o6v4h.mongodb.net/clase?retryWrites=true&w=majority');
mongoose.connection.on('open',(ref)=>{
  console.log('Si ves esto es por que vas bien')
})

module.exports=connection;
