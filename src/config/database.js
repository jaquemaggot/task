//importação do mongoose
const mongoose = require('mongoose');
//URL DE CONEXÃO COM O MONGO
const url = 'mongodb://localhost:27017/todo';
mongoose.connect(url,{useNewUrlParser: true});

module.exports = mongoose;