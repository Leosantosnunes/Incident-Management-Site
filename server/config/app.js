var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

//modules for authentication
let session = require('express-session');
let passport = require('passport');


//let flash = require('connect-flash');

//Database Setup
let mongoose = require('mongoose');
let DB = require('./db')

mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
  console.log('Node.JS is successfully connected to MongoDB.')
});


var indexRouter = require('../routes/index');
var movieRouter = require('../routes/movie');
var contactRouter = require('../routes/contact');
var ordersRouter = require('../routes/order');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use(cors());

//setup express session
app.use(session({
  secret: 'SomeSecret',
  saveUninitialized: false,
  resave: false
}));

//Initialize flash
//app.use(flash());

//initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/movieStore', movieRouter);
app.use('/contact', contactRouter);
app.use('/orders', ordersRouter)

//passport user configuration

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
