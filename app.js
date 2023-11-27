const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Configuração do middleware para processar o corpo das requisições POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para requisições GET
app.get('/', (req, res) => {
  res.send('Rota GET: Olá, mundo!');
});

// Rota para requisições POST
app.post('/', (req, res) => {
  const requestData = req.body;
  res.json({ message: 'Rota POST: Recebido com sucesso!', data: requestData });
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});