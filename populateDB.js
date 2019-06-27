#! /usr/bin/env node

// Get arguments passed on command line
var userArgs = process.argv.slice(2);

var async = require('async')
var Book = require('./models/recipe')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var books = []
var ingredients = ['123', '456', '789'];
var methodSteps = ['step1', 'step2', 'step3'];

function bookCreate(title, url, ingredients, methodSteps) {
  bookdetail = {
    title: title,
    url: url,
    ingredients: ingredients,
    methodSteps: methodSteps
  }

  var book = new Book(bookdetail);
  book.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Book: ' + book);
    books.push(book)
  }  );
}

function createBooks(cb) {
    async.parallel([
        function(callback) {
          bookCreate("Title 1", "URL 1", ingredients, methodSteps);
        },
        function(callback) {
          bookCreate('Title 2', 'URL 2', ingredients, methodSteps);
        }
        ],
        // optional callback
        cb);
}

async.series([
    createBooks
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log("Replaced");

    }
    // All done, disconnect from database
    mongoose.connection.close();
});
