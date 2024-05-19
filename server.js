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

// Rotas para `adotante`

// Buscar todos os adotantes
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

// Inserir um novo adotante
app.post('/adotante', (req, res) => {
  console.log('Recebida requisição POST para inserir um novo adotante:', req.body);
  let sql = 'INSERT INTO adotante SET ?';
  
  let data = {
    matricula: req.body.matricula,
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    cpf: req.body.cpf,
    estadoCivil: req.body.estadoCivil,
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

// Atualizar um adotante existente
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

// Excluir um adotante
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
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Rotas para `animal`

// Buscar todos os animais
app.get('/animal', (req, res) => {
  console.log('Recebida requisição GET para buscar todos os animais');
  let sql = 'SELECT * FROM animal';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar animais:', err);
      res.status(500).send({ message: 'Erro ao buscar animais' });
      return;
    }
    console.log('Animais encontrados:', results);
    res.send(results);
  });
});

// Inserir um novo animal
app.post('/animal', (req, res) => {
  console.log('Recebida requisição POST para inserir um novo animal:', req.body);
  let sql = 'INSERT INTO animal SET ?';
  
  let data = {
    matricula: req.body.matricula,
    nome: req.body.nome,
    especie: req.body.especie,
    pelagem: req.body.pelagem,
    raca: req.body.raca,
    sexo: req.body.sexo,
    idade: req.body.idade,
    castracao: req.body.castracao,
    vacinacao: req.body.vacinacao,
    localResgate: req.body.localResgate,
    observacao: req.body.observacao,
    status: req.body.status,
    imagem: req.body.imagem
  };

  console.log('Dados que serão inseridos no banco:', data);

  db.query(sql, data, (err, results) => {
    if (err) {
      console.error('Erro ao inserir animal:', err);
      res.status(500).send({ message: 'Erro ao inserir animal' });
      return;
    }
    console.log('Animal inserido com sucesso:', results);
    res.send(results);
  });
});

// Atualizar um animal existente
app.put('/animal/:matricula', (req, res) => {
  console.log('Recebida requisição PUT para atualizar animal:', req.params.matricula, req.body);
  let sql = 'UPDATE animal SET ? WHERE matricula = ?';
  let data = [req.body, req.params.matricula];
  db.query(sql, data, (err, results) => {
    if (err) {
      console.error('Erro ao atualizar animal:', err);
      res.status(500).send({ message: 'Erro ao atualizar animal' });
      return;
    }
    console.log('Animal atualizado com sucesso:', results);
    res.send(results);
  });
});

// Excluir um animal
app.delete('/animal/:matricula', (req, res) => {
  console.log('Recebida requisição DELETE para excluir animal:', req.params.matricula);
  let sql = 'DELETE FROM animal WHERE matricula = ?';
  db.query(sql, req.params.matricula, (err, results) => {
    if (err) {
      console.error('Erro ao excluir animal:', err);
      res.status(500).send({ message: 'Erro ao excluir animal' });
      return;
    }
    if (results.affectedRows === 0) {
      console.log('Animal não encontrado:', req.params.matricula);
      res.status(404).send({ message: 'Animal não encontrado' });
    } else {
      console.log('Animal excluído com sucesso:', results);
      res.send({ message: 'Animal excluído com sucesso' });
    }
  });
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
