const { DataTypes } = require("sequelize");

const db = require("../db");

const BasketDevice = db.define(
  "basket_device",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  })
;

module.exports = BasketDevice;