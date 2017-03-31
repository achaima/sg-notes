function FrisbeeController() {
  var controller = this;

  function init() {
    console.log('FrisbeeController', controller);
  }
  init();
}

angular
.module('angularstates')
.controller('FrisbeeController', FrisbeeController);
