const { DataTypes } = require("sequelize");

const db = require("../db");

const Device = db.define(
  "device",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
;

module.exports = Device;