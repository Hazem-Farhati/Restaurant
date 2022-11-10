const mongoose = require("mongoose");
const schema = mongoose.Schema;

const feedbackSchema = new schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  date: { type: Date, require: true },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
