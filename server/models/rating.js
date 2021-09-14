const { DataTypes } = require("sequelize");

const db = require("../db");

const Rating = db.define(
  "rating",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
;

module.exports = Rating;