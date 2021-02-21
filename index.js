const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Customer = require("./model");
const routes = require("./router");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify : false
});

mongoose.connection.on("connected", () => {
  console.log("DATABASE CONNECTED");
});

mongoose.connection.on("error", () => {
  console.log("E R R O R");
});
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(8000, () => {
  console.log("Server running");
});
