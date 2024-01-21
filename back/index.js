const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Db } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));

const PORT = 8080;
const DB =
  "mongodb+srv://SabinaBakirzada:Sebine2002@cluster0.oryn6ku.mongodb.net/";

const { Schema } = mongoose;

const eatwell = {
  img: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  name: { type: String, require: true },
};

const Eats = new Schema("Eats", eatwell);

app.post("/eats", async (req, res) => {
  try {
    const { img, price, description, name } = req.params;
    const meal = new Eats({
      img,
      price,
      description,
      name,
    });
    meal.save();
    res.status(200).send(meal);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/eats", async (req, res) => {
  try {
    const meat = await Eats.find({});
    res.status(200).send(meal);
  } catch (error) {}
});

app.get("/eats/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const food = await Eats.findById(id);

    res.status(200).send(food);
  } catch (error) {
    res.status(200).send(error);
  }
});

app.delete("/eats/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const eat = await Eats.findByIdDelete(id);
    res.status(200).send(eat);
  } catch (error) {
    res.status(500).send(error);
  }
});

mongoose.connect(DB).then(() => console.log("Connected"));
app.listen(PORT, () => {
  console.log("Port is running");
});
