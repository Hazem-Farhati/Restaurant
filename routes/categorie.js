const express = require("express");
const Categorie = require("../models/categorie");

const categorieRouter = express.Router();

//post categorie
categorieRouter.post("/add", async (req, res) => {
  try {
    let newCategorie = new Categorie(req.body);
    let result = await newCategorie.save();
    res.send({ categorie: result, msg: "categorie is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all categories
categorieRouter.get("/all", async (req, res) => {
  try {
    let result = await Categorie.find();
    res.send({ categorie: result, msg: "all categories" });
  } catch (error) {
    console.log(error);
  }
});
//get categorie by id
categorieRouter.get("/get/:id", async (req, res) => {
  try {
    let result = await Categorie.findById(req.params.id);
    res.send({ categorie: result, msg: "one categorie" });
  } catch (error) {
    console.log(error);
  }
});
//delete categorie
categorieRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await Categorie.findByIdAndDelete(req.params.id);
    res.send({ msg: " categorie deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update categorie
categorieRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await Categorie.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " categorie is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = categorieRouter;
