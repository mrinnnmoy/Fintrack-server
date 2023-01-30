// Import All Dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path: './config.env'});
require('./db/conn');

// These Method is used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Run Server
app.listen(3001, () => {
  console.log("Server is Listening");
});
