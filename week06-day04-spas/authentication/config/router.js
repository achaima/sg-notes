var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');
var booksController = require('../controllers/books-controller');
var sessionsController = require('../controllers/sessions-controller');

// home page
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Home'
  });
});

//======================== USERS ============================//
router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

router.get('/users/new', usersController.new);
router.get('/users/:id/edit', usersController.edit);

router.route('/users/:id')
  .put(usersController.update)
  .get(usersController.show)
  .delete(usersController.destroy);

//======================= BOOKS ===========================//
router.get('/books/:id/edit', booksController.edit);
router.post('/books', booksController.create);
router.route('/books/:id')
  .put(booksController.update)
  .delete(booksController.destroy);

//======================= SESSIONS ===========================//
router.route('/sessions')
.post(sessionsController.create)
.delete(sessionsController.delete);

router.get('/sessions/new', sessionsController.new);

//======================= EXPORT ===========================//

module.exports = router;
