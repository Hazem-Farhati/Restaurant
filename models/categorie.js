const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorieSchema = new schema({
  name: { type: String, require: true },

});

const Categorie = mongoose.model("Categorie", categorieSchema);
module.exports = Categorie;
