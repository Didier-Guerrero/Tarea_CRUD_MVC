const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", //Creacion y localizacion de la base de datos
});

module.exports = sequelize;
