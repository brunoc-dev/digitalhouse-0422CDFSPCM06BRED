const menuJson = require('./menu.json');

const MenuModel = {
  findAll: function () {
    return menuJson
  }
}

module.exports = MenuModel;