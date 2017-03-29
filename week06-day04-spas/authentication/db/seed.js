var User = require('../models/user-model');
var Book = require('../models/book-model');
var mongoose = require('mongoose');

function seedData() {
  var user = new User();

  user.firstName = 'Freddie';
  user.lastName = 'Mercury';
  user.email = 'freddie@example.com';
  user.save = [];

    if (err) {
      console.log('could not create user: err:', err);
      process.exit(1);
    }


  //   book1.save(function (err, book1Result) {
  //      if (err) {
  //        console.log('could not create book1: err:', err);
  //        process.exit(1);
  //      }
  //      booksSaved.push(book1Result);
  //      book2.save(function (err, book2Result) {
  //        if (err) {
  //          console.log('could not create book2: err:', err);
  //          process.exit(1);
  //        }
  //        booksSaved.push(book2Result);
  //        console.log('booksSaved:', booksSaved);
  //        user.firstName = 'Freddie';
  //        user.lastName = 'Mercury';
  //        user.email = 'freddie@example.com';
  //        user.books.push(booksSaved[0]._id);
  //        user.books.push(booksSaved[1]._id);
  //        user.save(function (err, userResult) {
  //          if (err) {
  //            console.log('could not create user: err:', err);
  //            process.exit(1);
  //          }
  //          console.log('user saved:', userResult);
  //          mongoose.connection.close();
  //        });
  //      });
  //    });
  //  }























    book1.title = 'Great Expectations';
    book1.author = 'Chucky D';
    book1.user = userSaved._id;
    book1.save(function (err, book1Saved) {
      var book2 = new Book();

      if (err) {
        console.log('could not create book1: err:', err);
        process.exit(1);
      }
      console.log('book1 saved:', book1Saved);

      book2.title = '1984';
      book2.author = 'George Orwell';
      book2.user = userSaved._id;
      book2.save(function (err, book2Saved) {
        if (err) {
          console.log('could not create book2: err:', err);
          process.exit(1);
        }
        console.log('book2 saved:', book2Saved);

        userSaved.books.push(book1._id);
        userSaved.books.push(book2._id);
        userSaved.save(function (err, userWithBooksSaved) {
          if (err) {
            console.log('could not create user: err:', err);
            process.exit(1);
          }
          console.log('user saved with books:', userWithBooksSaved);
          mongoose.connection.close();
        });
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
