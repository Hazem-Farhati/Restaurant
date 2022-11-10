const mongoose = require("mongoose");
const schema = mongoose.Schema;

const menuSchema = new schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String},
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
