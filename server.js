const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

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
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
  console.log('Conectado ao banco de dados');
});

// Rota para buscar todos os adotantes
app.get('/adotante', (req, res) => {
  console.log('Recebida requisição GET para buscar todos os adotantes');
  let sql = 'SELECT * FROM adotante';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar adotantes:', err);
      res.status(500).send({ message: 'Erro ao buscar adotantes' });
      return;
    }
    console.log('Adotantes encontrados:', results);
    res.send(results);
  });
});

// Rota para inserir um novo adotante
app.post('/adotante', (req, res) => {
  console.log('Recebida requisição POST para inserir um novo adotante:', req.body);
  let sql = 'INSERT INTO adotante SET ?';
  
  let data = {
    matricula: req.body.matricula,
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    cpf: req.body.cpf,
    estadoCivil: req.body.estadoCivil, // Corrigido aqui
    cep: req.body.cep,
    logradouro: req.body.logradouro,
    numero: req.body.numero,
    bairro: req.body.bairro,
    cidade: req.body.cidade,
    estado: req.body.estado,
    complemento: req.body.complemento
  };

  console.log('Dados que serão inseridos no banco:', data);

  db.query(sql, data, (err, results) => {
    if (err) {
      console.error('Erro ao inserir adotante:', err);
      res.status(500).send({ message: 'Erro ao inserir adotante' });
      return;
    }
    console.log('Adotante inserido com sucesso:', results);
    res.send(results);
  });
});

// Rota para atualizar um adotante existente
app.put('/adotante/:cpf', (req, res) => {
  console.log('Recebida requisição PUT para atualizar adotante:', req.params.cpf, req.body);
  let sql = 'UPDATE adotante SET ? WHERE cpf = ?';
  let data = [req.body, req.params.cpf];
  db.query(sql, data, (err, results) => {
    if (err) {
      console.error('Erro ao atualizar adotante:', err);
      res.status(500).send({ message: 'Erro ao atualizar adotante' });
      return;
    }
    console.log('Adotante atualizado com sucesso:', results);
    res.send(results);
  });
});

// Rota para excluir um adotante
app.delete('/adotante/:cpf', (req, res) => {
  console.log('Recebida requisição DELETE para excluir adotante:', req.params.cpf);
  let sql = 'DELETE FROM adotante WHERE cpf = ?';
  db.query(sql, req.params.cpf, (err, results) => {
    if (err) {
      console.error('Erro ao excluir adotante:', err);
      res.status(500).send({ message: 'Erro ao excluir adotante' });
      return;
    }
    if (results.affectedRows === 0) {
      console.log('Adotante não encontrado:', req.params.cpf);
      res.status(404).send({ message: 'Adotante não encontrado' });
    } else {
      console.log('Adotante excluído com sucesso:', results);
      res.send({ message: 'Adotante excluído com sucesso' });
    }
  });
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
