const express = require("express");
const logger = require("morgan");
const compression = require("compression");
const mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "https://powerful-cliffs-10887.herokuapp.com";

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.coonect(MONGODB_URI);
mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});