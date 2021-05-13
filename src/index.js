const express = require('express');
const server = express();
server.use(express.json());
//criando rota
//navegador sempre executa GET


const TaskRoutes = require('./routes/TaskRoutes');
//Colocando o arquivo que irá ter todas as rotas dentro da API
server.use('/task', TaskRoutes);

//Informando em que porta vai rodar
server.listen(3000, () => {
    console.log('API ONLINE')
})

