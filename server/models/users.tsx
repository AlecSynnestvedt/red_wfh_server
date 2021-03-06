const { DataTypes } = require("sequelize");
const db = require('../db');

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    required: true,
    unique: true,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    required: true,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

module.exports = Users;