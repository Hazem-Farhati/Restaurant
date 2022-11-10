const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = new schema({
  type: { type: String, require: true },
  date: { type: Date, require: true },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
