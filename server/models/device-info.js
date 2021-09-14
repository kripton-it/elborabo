const { DataTypes } = require("sequelize");

const db = require("../db");

const DeviceInfo = db.define(
  "device_info",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
;

module.exports = DeviceInfo;