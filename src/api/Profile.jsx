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

// Rota para obter o perfil de um usuário
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId

    try {
        const query = 'SELECT * FROM users WHERE id = $1'
        const { rows } = await pool.query(query, [userId])

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado.' })
        }

        const userProfile = rows[0]

        res.status(200).json(userProfile)
    } catch (error) {
        console.error('Erro ao buscar perfil do usuário:', error)
        res.status(500).json({ message: 'Erro interno no servidor.' })
    }
})

// Rota para atualizar o perfil de um usuário
router.put('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const { name, bio } = req.body;

    try {
        const query = 'UPDATE users SET name = $1, bio = $2 WHERE id = $3 RETURNING *'
        const { rows } = await pool.query(query, [name, bio, userId])

        const updatedUserProfile = rows[0]

        res.status(200).json(updatedUserProfile)
    } catch (error) {
        console.error('Erro ao atualizar perfil do usuário:', error)
        res.status(500).json({ message: 'Erro interno no servidor.' })
    }
})

module.exports = router
