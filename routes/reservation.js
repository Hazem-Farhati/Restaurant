const express = require("express");
const Reservation = require("../models/reservation");

const reservationRouter = express.Router();

//post reservation
reservationRouter.post("/add", async (req, res) => {
  try {
    let newReservation = new Reservation(req.body);
    let result = await newReservation.save();
    res.send({ reservation: result, msg: "reservation is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all reservations
reservationRouter.get("/all", async (req, res) => {
  try {
    let result = await Reservation.find();
    res.send({ reservation: result, msg: "all reservations" });
  } catch (error) {
    console.log(error);
  }
});
//get reservation by id
reservationRouter.get("/get/:id", async (req, res) => {
  try {
    let result = await Reservation.findById(req.params.id);
    res.send({ reservation: result, msg: "one reservation" });
  } catch (error) {
    console.log(error);
  }
});
//delete reservation
reservationRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await Reservation.findByIdAndDelete(req.params.id);
    res.send({ msg: " reservation deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update reservation
reservationRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await Reservation.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " reservation is updated" });
  } catch (error) {
    console.log(error);
  }
});

//update all reservation
reservationRouter.put("/update/all", async (req, res) => {
  try {
    let result = await Reservation.updateMany(
    // {date: {}}
      { date: req.params.date },
      { $set: { ...req.body } }
    );
    res.send({ msg: " all reservation is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = reservationRouter;
