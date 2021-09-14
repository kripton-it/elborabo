const { DataTypes } = require("sequelize");

const db = require("../db");

const TypeBrand = db.define(
  "type_brand",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  })
;

module.exports = TypeBrand;