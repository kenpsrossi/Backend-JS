// Importando os módulos necessários
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Adicionando CORS

// Criando o servidor Express
const app = express();

// Habilitando CORS
app.use(cors());

// Permitindo o uso de JSON
app.use(express.json());

// Criando a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'k.dev2024',
  database: 'petguardian'
});

// Conectando ao banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados');
});

// Rota para buscar todos os adotantes
app.get('/adotante', (req, res) => {
  let sql = 'SELECT * FROM adotante';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Rota para inserir um novo adotante
app.post('/adotante', (req, res) => {
  let sql = 'INSERT INTO adotante SET ?';
  let data = {
    matricula: req.body.matricula,
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    cpf: req.body.cpf,
    estadoCivil: req.body.estadoCivil,
    enderecoCEP: req.body.enderecoCEP,
    enderecoLogradouro: req.body.enderecoLogradouro,
    enderecoNumero: req.body.enderecoNumero,
    enderecoBairro: req.body.enderecoBairro,
    enderecoCidade: req.body.enderecoCidade,
    enderecoEstado: req.body.enderecoEstado,
    enderecoComplemento: req.body.enderecoComplemento
  };
  db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Rota para atualizar um adotante existente
app.put('/adotante/:cpf', (req, res) => {
  let sql = 'UPDATE adotante SET ? WHERE cpf = ?';
  let data = [req.body, req.params.cpf];
  db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Rota para excluir um adotante
app.delete('/adotante/:cpf', (req, res) => {
  let sql = 'DELETE FROM adotante WHERE cpf = ?';
  db.query(sql, req.params.cpf, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
