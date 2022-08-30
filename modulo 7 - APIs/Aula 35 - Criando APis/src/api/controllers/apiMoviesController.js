const { Movie } = require('../../models');

const INTERNAL_SERVER_ERROR_MSG = 'Não foi possível realizar esta operação'

module.exports = {
  async index (req, res) {
    try {
      res.status(200).json(await Movie.findAll())
    } catch (error) {
      res.status(500).json({ erro: INTERNAL_SERVER_ERROR_MSG});
    }
  },

  async findOne (req, res) {
    try {
      res.status(200).json(await Movie.findByPk(req.params.id));
    } catch (error) {
      res.status(500).json({ erro: INTERNAL_SERVER_ERROR_MSG });
    }
  },

  async create (req, res) {
    try {
      if (!Object.values(req.body).length) {
        throw {code: 'InvalidBody'}
      }

      res.status(200).json(await Movie.create(req.body));
    } catch (error) {
      if (error.code === 'InvalidBody') {
        res.status(400).json({ erro: 'É necessário incluir campos obrigatórios' });
      } else {
        res.status(500).json({ erro: INTERNAL_SERVER_ERROR_MSG });
      }
    }
  },

  async update (req, res) {
    try {
      res.status(200).json(await Movie.update(req.body, {
        where: { id: req.params.id }
      }));
    } catch (error) {
      res.status(500).json({ erro: INTERNAL_SERVER_ERROR_MSG });
    }
  }
}