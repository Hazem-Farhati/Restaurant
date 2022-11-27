const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = new schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  type: { type: String, default: "normaleeeee" },
  user_id: { type: String, required: true },
  menu_name: { type: String, required: true },
  date: { type: Date, default: "02/02/2000" },
  menu_price: { type: String, required: true },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
