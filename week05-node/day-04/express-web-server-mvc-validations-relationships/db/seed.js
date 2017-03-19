// Basic seeds file.
// Poorly-executed, but does the job of creating one user, who has 2 books.
var User = require('../models/user-model');
var Book = require('../models/book-model');
var mongoose = require('mongoose');

function seedData() {
  var book1 = new Book();
  var book2 = new Book();
  var user = new User();
  var booksSaved = [];
  var userSaved;
  //these are the books that are going to be created

  book1.title = 'Great Expectations';
  book1.author = 'Chucky D';
  book2.title = '1984';
  book2.author = 'George Orwell';


//this is .save is create book.
//good to have console log to know how far along the process you
//console log is good feedback line 36&37
  book1.save(function (err, book1Result) {
    if (err) {
      console.log('could not create book1: err:', err);
      process.exit(1);
    }
    booksSaved.push(book1Result);
    book2.save(function (err, book2Result) {
      if (err) {
        console.log('could not create book2: err:', err);
        process.exit(1);
      }
      booksSaved.push(book2Result);
      console.log('booksSaved:', booksSaved);
      user.firstName = 'Freddie';
      user.lastName = 'Mercury';
      user.email = 'freddie@example.com';
      user.books.push(booksSaved[0]);
      user.books.push(booksSaved[1]);
      user.save(function (err, userResult) {
        if (err) {
          console.log('could not create user: err:', err);
          process.exit(1);
        }
        userSaved = userResult;
        console.log('userSaved:', userSaved);
        mongoose.connection.close();
      });
    });
  });
}

function initDb() {
  mongoose.connect('mongodb://localhost/sg-mvc', {}, function (err) {
    if (err) {
      console.log('could not connect to db: err:', err);
      process.exit(1);
    }
    console.log('connected');
    User.remove({}, function(err) {
      if (err) {
        console.log('could not drop User collection: err:', err);
        process.exit(1);
      }
      console.log('dropped users');
      Book.remove({}, function(err) {
        if (err) {
          console.log('could not drop Book collection: err:', err);
          process.exit(1);
        }
        console.log('dropped books');
        seedData();
      });
    });
  });
}

initDb();
//1. This is the first command to out it at the top would be hoising.
//The function initDB is defined above.
//Line 54: 2 parameters
//sg-mvc is the database you want to user
//{}, once you done this perform the following function
//This part is refering to the connect
//Drop users collection//Line 60//Once you made this connection then do the remove function
//60 takes two parater the remove({}) which removes empty object and error function to forth
//this goes onto book remove
//Seed Data referes to the function in which  he did that big function:
// Create book 1
// Create book 2
// Add links
// Create user
//by the time we get to the we connected, removed users, removed books and all the rest specified above
//he put it in function seed which is in seed.js file
//function SeedData is online 7
//declare variables at the top to avoid possibility of hoisting
