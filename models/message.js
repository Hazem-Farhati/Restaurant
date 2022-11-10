const mongoose = require("mongoose");
const schema = mongoose.Schema;

const messageSchema = new schema({
  time: { type: Date, require: true },
  content: { type: String, require: true },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
