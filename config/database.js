const { Sequelize } = require('sequelize');


module.exports = new Sequelize('ppi-dev', 'postgres', 'Abcd1234!', {
  host: 'localhost',
  dialect: 'postgres'
});
