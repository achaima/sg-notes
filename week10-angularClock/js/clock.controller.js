function clockController($timeout) {
  var controller = this;

  controller.tick = function() {
    controller.date = new Date();
    $timeout(controller.tick, 1000);
  };

  controller.tick();
}

angular
    .module('angularClock')
    .controller('clockController', clockController);
