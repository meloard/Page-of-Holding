const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);
