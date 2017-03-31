function MonsterTrucksController () {
  var controller = this;

  function init() {
    console.log('MonsterTrucksController', controller);
    controller.image1 = 'http://wonderopolis.org/wp-content/uploads/2011/12/monster-truck_shutterstock_5659207.jpg';
  }
  init();
}

angular
.module('angularstates')
.controller('MonsterTrucksController', MonsterTrucksController);
