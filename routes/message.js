const express = require("express");
const Message = require("../models/message");

const messageRouter = express.Router();

//post message
messageRouter.post("/add", async (req, res) => {
  try {
    let newMessage = new Message(req.body);
    let result = await newMessage.save();
    res.send({ message: result, msg: "message is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all messages
messageRouter.get("/all", async (req, res) => {
  try {
    let result = await Message.find();
    res.send({ message: result, msg: "all messages" });
  } catch (error) {
    console.log(error);
  }
});
//get message by id
messageRouter.get("/get/:id", async (req, res) => {
  try {
    let result = await Message.findById(req.params.id);
    res.send({ message: result, msg: "one message" });
  } catch (error) {
    console.log(error);
  }
});
//delete message
messageRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await Message.findByIdAndDelete(req.params.id);
    res.send({ msg: " message deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update message
messageRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await Message.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " message is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = messageRouter;
