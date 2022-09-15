const { User } = require("../models");
const bcrypt = require("bcrypt");
const usercontroller = {

  index: async (req, res) => {
    try{
      const users = await User.findAll();
      return res.json(users);
    }catch(error){
      if (error.name === "SequelizeConnectionRefusedError") {
        return res.status(500).json({
          error: true,
          msg: "Sem conexão com o banco de dados, tente novamente!",
        });
      } 
      // Bad request
      res.status(400).json({
        error: true,
        msg: "Erro na requisição tente novamente!",
      })
    }
  },

  store: async (req, res) => {
    const { name, surname, username, email, password } = req.body;
    console.log(name, surname, username, email, password)
    try {
      const newUser = await User.create({
        name,
        surname,
        email,
        username,
        password: bcrypt.hashSync(password, 10),
      });

      return res.status(201).json(newUser);

    } catch (e) {
      if (e.name === "SequelizeConnectionRefusedError") {
        return res.status(500).json({
          error: true,
          msg: "Sem conexão com o banco de dados, tente novamente!",
        });
      }
      if (e.name === "SequelizeUniqueConstraintError") {
        return res.status(400).json(e.parent.sqlMessage);
      }
      return res.status(400).json({
        error: true,
        msg: "Erro na requisição tente novamente!",
      });
    }
  },

};

module.exports = usercontroller;
