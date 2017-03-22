// REQUIRE
var Book = require('../models/book-model');
// var User = require('../models/user-model');

//==================================NEW===================================//
// Action: New
function newBook(req, res) {
  res.render('books/new', {
    title: 'New Book'
  });
}


//================================CREATE===================================//
// Action: create
function createBook(req, res) {
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;

  newBook.save(function (err) {
    var errorJson = [];

    if (err) {
      for (var path in err.errors) {
        errorJson.push({
          path: path,
          message: err.errors[path].message
        });
        console.log('Could not create new book: error:', err.errors[path].message);
      }
      res.status(400).json(errorJson);
      return;
    }
    res.redirect('/users');
  });
}


//================================EDIT===================================//
// Action: edit
function editBook(req, res) {
  var bookId = req.params.id;

  Book.findOne({ _id: bookId }, function (err, book) {
    if (err) {
      console.log('Could not get book:', err);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book');
      return;
    }
    res.render('books/edit', {
      title: 'Edit book',
      book: book
    });
  });
}

//================================UPDATE===================================//
// Action: update
function updateBook(req, res) {
  var bookId = req.params.id;
  var updatedBook = {
    title: req.body.title,
    author: req.body.author
  };

  Book.findOneAndUpdate({ _id: bookId }, updatedBook, function (err) {
    if (err) {
      console.log('Could not get existing user to update:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get existing book to update');
      return;
    }
    res.redirect('/users');
  });
}

//================================DELETE===================================//
// Action: destroy
function destroyBook(req, res) {
  var bookId = req.params.id;
  var userId = req.body.userId;
  //This is looking at the body which is the form in ejs
  //Look at input type etc
  
  Book.deleteOne({ _id: bookId}, function (err) {
    if (err) {
      console.log('Could not get user to delete:', err.message);
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users/' + userId );
  });
}


//================================EXPORT===================================//

module.exports = {
  new: newBook,
  create: createBook,
  edit: editBook,
  update: updateBook,
  destroy: destroyBook
};
