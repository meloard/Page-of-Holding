const User = require("./User");
const Character = require("./Character");
const Inventory = require("./Inventory");
const Messages = require("./Messages");
const Party = require("./Party");

User.hasMany(Character, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Messages, {
  foreignKey: "user_id",
  onDelete: "Cascade",
});

Character.hasOne(Party, {
  foreignKey: "party_id",
});

Character.hasMany(Inventory, {
  foreignKey: "char_id",
  onDelete: "CASCADE",
});

module.exports = { User, Character, Party };
