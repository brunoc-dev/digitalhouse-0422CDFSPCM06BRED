const MenuModel = require('../models/Menu');

const HomeController = {
  index: function (req, res) {
    const menuCompleto = MenuModel.findAll();
    res.render('indexView', { title: 'Express', menuCompleto });
  }
};

module.exports = HomeController;
