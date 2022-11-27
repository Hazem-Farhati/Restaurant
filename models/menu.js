const mongoose = require("mongoose");
const schema = mongoose.Schema;

const menuSchema = new schema({
  name: { type: String, required: true },
  description: { type: String, require: true },
  image: { type: String },
  prix: String,
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
