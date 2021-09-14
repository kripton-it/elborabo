const { DataTypes } = require("sequelize");

const db = require("../db");

const Basket = db.define(
  "basket",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  })
;

module.exports = Basket;