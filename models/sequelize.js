const config = require('../configs/db_config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'EJ22',
  config.user,
  config.password, {
    host: config.host,
    dialect: 'mysql'
  }
);

module.exports = sequelize;