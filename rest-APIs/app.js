const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");
const mongoose = require("mongoose");

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // * = all domains
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // which headers are allowed
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect("mongodb+srv://hta:agatha@cluster0.r2eb6bu.mongodb.net/shop")
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));