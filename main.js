const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connection = require('./database/connection');
const port = 3000;
const app = express();

// Definindo template de view para rendereizacao html
app.set('view engine', 'ejs');

// Lidando com formularios no backend
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// Definindo diretorio para arquivos estaticos tais como css
app.use(express.static(path.join(__dirname, 'public')));

// Realizando conexao com banco
connection
    .authenticate()
    .then(() => {
        console.log('Mysql conectado.')
    })
    .catch(err => {
        console.log('Erro ao conectar: ' + err.message)
    })

// Definindo rotas
app.use('/', require('./routes/editor'));
app.use('/', require('./routes/pubs'));
app.use('/', require('./routes/home'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/cadastro'));

// Abertura server
app.listen(port, () => {
    console.log(`
        Server rodando em localhost:${port}
    `)
});

