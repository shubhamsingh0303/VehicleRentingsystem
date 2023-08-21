var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cloudinary = require("cloudinary");

var app = express();

// Multer


app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



//Route Imports
const user = require("./routes/userRoutes");
const admin = require("./routes/adminRouts");
const car = require("./routes/carRoutes");

app.use("/user", user);
app.use("/admin", admin);
app.use("/car", car);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
