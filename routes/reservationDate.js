const express = require("express");
const ReservationDate = require("../models/reservationDate");

const reservationDateRouter = express.Router();

//post reservationDate
reservationDateRouter.post("/add", async (req, res) => {
  try {
    let newReservationDate = new ReservationDate(req.body);
    let result = await newReservationDate.save();
    res.send({ reservationDate: result, msg: "reservationDate is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all reservationDates
reservationDateRouter.get("/all", async (req, res) => {
  try {
    let result = await ReservationDate.find();
    res.send({ reservationDate: result, msg: "all reservationDates" });
  } catch (error) {
    console.log(error);
  }
});
//get reservationDate by id
reservationDateRouter.get("/get/:id", async (req, res) => {
  try {
    let result = await ReservationDate.findById(req.params.id);
    res.send({ reservationDate: result, msg: "one reservationDate" });
  } catch (error) {
    console.log(error);
  }
});
//delete reservationDate
reservationDateRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await ReservationDate.findByIdAndDelete(req.params.id);
    res.send({ msg: " reservationDate deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update reservationDate
reservationDateRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await ReservationDate.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " reservationDate is updated" });
  } catch (error) {
    console.log(error);
  }
});

//update all reservationDate
reservationDateRouter.put("/update/all", async (req, res) => {
  try {
    let result = await ReservationDate.updateMany(
      // {date: {}}
      { date: req.params.date },
      { $set: { ...req.body } }
    );
    res.send({ msg: " all reservationDate is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = reservationDateRouter;
