//Estou chamando o arquivo que faz a conexão com o Banco, nesse caso ele devolve o mongoose já conectado
const mongoose = require('../config/database');
//Representação de informações que será definido para ser armazenada no banco
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required:true},
    done: {type: Boolean, default: false},
    created : {type: Date, default: Date.now()}

});

//exportar para outros arquivos utilizarem
module.exports = mongoose.model('Task', TaskSchema);


