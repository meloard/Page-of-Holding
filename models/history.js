const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {}

History.init(
  {   
    char_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'character',
      key: 'char_id'
    }
      
    },
    party_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'party',
        key: 'party_id'
      }
          },
    module: {
      type: DataTypes.STRING
    },
    accomplishments: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'history',
  }
);

module.exports = History;