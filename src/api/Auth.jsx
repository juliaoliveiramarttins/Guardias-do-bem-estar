const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Pool } = require('pg')

const router = express.Router()

// Configuração do Pool de conexão com o PostgreSQL
const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'nome_do_banco',
  password: 'sua_senha',
  port: 5432,
})

// Rota para o login
router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const query = 'SELECT * FROM users WHERE username = $1'
    const { rows } = await pool.query(query, [username])

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado.' })
    }

    const user = rows[0]

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas.' })
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, 'seu_segredo_jwt', { expiresIn: '1h' })

    res.status(200).json({ token })
  } catch (error) {
    console.error('Erro no login:', error)
    res.status(500).json({ message: 'Erro interno no servidor.' })
  }
});

// Rota para o registro de usuário
router.post('/register', async (req, res) => {
  const { username, password } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *'
    const { rows } = await pool.query(query, [username, hashedPassword])

    const user = rows[0]

    // Gerar token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, 'seu_segredo_jwt', { expiresIn: '1h' })

    res.status(201).json({ token })
  } catch (error) {
    console.error('Erro no registro:', error)
    res.status(500).json({ message: 'Erro interno no servidor.' })
  }
})

module.exports = router
