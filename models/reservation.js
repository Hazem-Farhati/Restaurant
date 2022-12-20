const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = new schema({
  name: { type: String },
  last_name: { type: String},
  type: { type: String, default: "normaleeeee" },
  user_id: { type: String},
  menu_name: { type: String},
  // date: { type: Date, default: "02/02/2000" },
  menu_price: { type: String },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
