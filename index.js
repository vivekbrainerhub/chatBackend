require("dotenv").config();
const express = require("express");
const { connectDB } = require("./database/db");

const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

connectDB();
const PORT = process.env.PORT
const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  res.status(200).send("hello");
});


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

module.exports = app;
