const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Configuração do Pool de conexão com o PostgreSQL
const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'nome_do_banco',
  password: 'sua_senha',
  port: 5432,
});

// Gestão de erros no Pool de conexão
pool.on('error', (err, client) => {
  console.error('Erro inesperado no cliente PostgreSQL', err);
  process.exit(-1);
});

// Rotas
app.use('/api/Auth', require('./routes/auth'));
app.use('/api/PostAPI', require('./routes/posts'));
app.use('/api/Arofile', require('./routes/profile'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
