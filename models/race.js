const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Race extends Model {}

Race.init(
  {
    race_val: {
      type: DataTypes.STRING(30),
      allowNull: false
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
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'race',
  }
);

module.exports = Race;