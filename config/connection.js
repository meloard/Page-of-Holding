const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  'page_holding_db',
  'root',
  '99441378Cd',
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;