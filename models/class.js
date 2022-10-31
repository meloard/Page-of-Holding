const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class extends Model {}

Class.init(
  {
    char_class: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    str_adj: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dex_adj: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    con_adj: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    int_adj: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wis_adj: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cha_adj: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spcl_abils: {
      type: DataTypes.STRING
    }
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'char_class',
  }
);

module.exports = Class;