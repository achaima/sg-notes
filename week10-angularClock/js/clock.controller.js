function clockController($interval){
  var controller = this;

  controller.tick = function() {
    controller.date = new Date();
    controller.seconds = controller.date.getUTCSeconds();
    controller.minutes = controller.date.getUTCMinutes();
    controller.hours = controller.date.getUTCHours() + '1';
    //Set the time and add an hour as GMT is an hour behind
    controller.secondsHandAngle = controller.seconds * 6;
    controller.minutesHandAngle = controller.minutes * 6;
    //move 6 degrees every minute or second 360/60 = 6
    controller.hoursHandAngle = controller.hours * 30 + (controller.minutes * 0.5);
    //360deg divided by 12 = 30deg in 1 hour
    //0.5deg every min 30deg/60min = 0.5deg per minute


//css animation applying to the hands with ng-style in the HTML page
    controller.secondsHandStyle = {
      'transform': `rotate(${controller.secondsHandAngle}deg)`
    };
    controller.minutesHandStyle = {
      'transform': `rotate(${controller.minutesHandAngle}deg)`
    };
    controller.hoursHandStyle = {
      'transform': `rotate(${controller.hoursHandAngle}deg)`
    };
  };

  function init() {
    $interval(controller.tick, 1000);
  }

  init();
}


angular
    .module('angularClock')
    .controller('clockController', clockController);
