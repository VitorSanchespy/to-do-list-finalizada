//Importações
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose')
const rota = require('./routers/rotas');
const path = require('path')

// conexão simples com mongodb
// Conectando ao banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/todolist').then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
}).catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
});




const app = express();


// Configuração do Handlebars
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');


// Middleware para analisar dados da solicitação
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.use(rota);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 2707;

app.listen(PORT, ()=>{
    console.log(`Servidor está rodando na porta www.localhost:${PORT}`);
});
