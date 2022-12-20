const mongoose = require("mongoose");
const schema = mongoose.Schema;

const feedbackSchema = new schema({
  name: { type: String, required: true },
  lastname: { type: String},
  user_id: { type: String, required: true },
  title: { type: String, require: true },
  content: { type: String, require: true },
  date: { type: Date, require: true },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
