'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING(255),
    email: {
      type : DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: DataTypes.STRING(255),
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  });
  return User;
};