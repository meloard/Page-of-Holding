const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Messages extends Model {}

Messages.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    party_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'party',
        key: 'party_id'
      }
     },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Message: {
      type: DataTypes.STRING
    },
    expiration: {
      type: DataTypes.DATE
    },
    important: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

},
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'messages',
  }
);

module.exports = Messages;