//Buscando nosso modelo
const TaskModel = require('../model/Taskmodel');

//Formato de classe, por que podemos ter diversas funções
class TaskController{
    //assincrona
    async create(req,res){
        //recupera do corpo da requisição e transforma em um modelo
        const task = new TaskModel(req.body);
        //Converteu em um modelo pede para salvar.
        await task
        //Salvando
                .save()
                //Deu tudo certo, retorno positivo
                .then(response =>{
                    return res.status(200).json(response);
                })
                //deu errado, vai retornar o erro.
                .catch(error =>{
                    return res.status(500).json(error);
                });
    }
}

module.exports = new TaskController();
