var express = require('express');
var router = express.Router();
var userController =require('../controllers/users-controller');


router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.route('/users')
 .get(userController.index)
 .post(userController.create);

router.get('/users/new', userController.new);
router.get('/users/:id/edit', userController.edit);


router.route('/users/:id')
.put(userController.update)
.get(userController.show)
.delete(userController.destroy);

module.exports = router;
