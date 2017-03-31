function CatController() {
  var controller = this;

  function init() {
    console.log('CatController', controller);
  }

  init();
}


angular
  .module('angularstates')
  .controller('CatController', CatController);
