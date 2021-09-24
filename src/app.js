// extarnal import
require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3330;
const path = require("path");

// internal import
const {
  notFoundHandler,
  errorHandler,
} = require("../middleware/common/errors");

app.use(cookieParser(process.env.COOKIE_KEY));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect with data base
const url = process.env.DATA_BASE_URL;
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("connect with database");
  })
  .catch((err) => {
    console.log(err);
  });

// connect with ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

// routing setup
const router = require("../Router/router");
app.use(router);

// error handling
// 404 error handler
app.use(notFoundHandler);
// create default error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server created ${PORT}`);
});
