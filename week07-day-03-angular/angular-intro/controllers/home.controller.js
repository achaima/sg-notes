
function HomeController() {
  var controller = this;
  var canShowGonzo = false;

//shows example of sending the click event to this handler
//see the markup where the variable `$event is passed to this method`.
  controller.showGonzo = function(event) {
    console.log('showGonzo: event:', event);
    canShowGonzo = true;
  };

  controller.hideGonzo = function() {
    canShowGonzo = false;
  };

  controller.toggleGonzo = function() {
    canShowGonzo = !canShowGonzo;
  };

  controller.isGonzoVisible = function () {
    return canShowGonzo;
  };

  controller.addTrainer = function() {
    console.log('addTrainer: controller.newTrainerName:', controller.newTrainerName);
    controller.trainers.push(controller.newTrainerName);
    controller.newTrainerName = '';
  };

  function init() {
    console.log('inside HomeController');
    controller.newTrainerName = '';
    controller.title = 'Home page';
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.hideGonzo();
  }

  init();
}
//square brackets lets angular know its an app
angular
  .module('myFirstApp', [])
  .controller('HomeController', HomeController);
