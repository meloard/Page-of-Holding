const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Party extends Model {}

Party.init(
  {
    party_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DM: {
      type: DataTypes.STRING
    },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'party',
  }
);

module.exports = Party;