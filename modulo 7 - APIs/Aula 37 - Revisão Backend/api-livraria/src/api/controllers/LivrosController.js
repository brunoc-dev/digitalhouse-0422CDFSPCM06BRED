const {Livro} = require('../../models')

module.exports = {
    async index (req, res) {
        try {
            res.json(await Livro.findAll())
        } catch (error) {
            res.json({ erro: 'Não foi possível encontrar os livros!'})   
        }
    },

    async getOne (req, res) {
        try {
            res.json(await Livro.findByPk(req.params.id))
        } catch (error) {
            res.json({ erro: 'Não foi possível encontrar este livro!' })
        }
    },

    async create (req, res) {
        try {
            res.json(await Livro.create(req.body))
        } catch (error) {
            res.json({ erro: 'Não foi possível criar um novo livro!' })
        }
    },

    async update (req, res) {
        try {
            res.json(await Livro.update(req.body, { where: {id: req.params.id } }))
        } catch (error) {
            res.json({ erro: 'Não foi possível atualizar o livro!' })
        }
    },

    async destroy (req, res) {
        try {
            res.json(await Livro.destroy({ where: { id: req.params.id }}))
        } catch (error) {
            res.json({ erro: 'Não foi possível remover um novo livro!' })
        }
    }
}
