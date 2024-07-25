const express = require('express')
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

// Rota para obter todos os posts
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM posts'
    const { rows } = await pool.query(query)

    res.status(200).json(rows)
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    res.status(500).json({ message: 'Erro interno no servidor.' })
  }
})

// Rota para criar um novo post
router.post('/', async (req, res) => {
  const { description, imageUrl } = req.body

  try {
    const query = 'INSERT INTO posts (description, imageUrl) VALUES ($1, $2) RETURNING *'
    const { rows } = await pool.query(query, [description, imageUrl])

    const newPost = rows[0]

    res.status(201).json(newPost)
  } catch (error) {
    console.error('Erro ao criar post:', error)
    res.status(500).json({ message: 'Erro interno no servidor.' })
  }
})

// Rota para atualizar um post
router.put('/:id', async (req, res) => {
  const postId = req.params.id;
  const { description, imageUrl } = req.body

  try {
    const query = 'UPDATE posts SET description = $1, imageUrl = $2 WHERE id = $3 RETURNING *'
    const { rows } = await pool.query(query, [description, imageUrl, postId])

    const updatedPost = rows[0]

    res.status(200).json(updatedPost)
  } catch (error) {
    console.error('Erro ao atualizar post:', error)
    res.status(500).json({ message: 'Erro interno no servidor.' })
  }
})

// Rota para deletar um post
router.delete('/:id', async (req, res) => {
  const postId = req.params.id

  try {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *'
    const { rows } = await pool.query(query, [postId])

    const deletedPost = rows[0]

    res.status(200).json(deletedPost)
  } catch (error) {
    console.error('Erro ao deletar post:', error)
    res.status(500).json({ message: 'Erro interno no servidor.' })
  }
})

module.exports = router
