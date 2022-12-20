const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationDateSchema = new schema({
  name: { type: String },
  last_name: { type: String },
  type: { type: String, default: "normaleeeee" },
  user_id: { type: String },
  menu_name: { type: Array },
  date: { type: Date },
  menu_price: { type: Array },
});

const ReservationDate = mongoose.model("ReservationDate", reservationDateSchema);
module.exports = ReservationDate;
