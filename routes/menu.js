const express = require("express");
const Menu = require("../models/menu");

const menuRouter = express.Router();

//post menu
menuRouter.post("/add", async (req, res) => {
  try {
    let newMenu = new Menu(req.body);
    let result = await newMenu.save();
    res.send({ menu: result, msg: "menu is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all menus
menuRouter.get("/all", async (req, res) => {
  try {
    let result = await Menu.find();
    res.send({ menu: result, msg: "all menus" });
  } catch (error) {
    console.log(error);
  }
});
//get menu by id
menuRouter.get("/get/:id", async (req, res) => {
  try {
    let result = await Menu.findById(req.params.id);
    res.send({ menu: result, msg: "one menu" });
  } catch (error) {
    console.log(error);
  }
});
//delete menu
menuRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await Menu.findByIdAndDelete(req.params.id);
    res.send({ msg: " menu deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update menu
menuRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await Menu.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " menu is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = menuRouter;
