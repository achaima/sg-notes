function DuckController($stateParams, DuckFactory) {
  var controller = this;

  controller.getDuck = function (){
    var duckId = $stateParams.duckId;


    DuckFactory.getOne(duckId).then(
      function sucess(response) {
        console.log('duck:', response);
        controller.selectedDuck = response.data;
      },
      function error(error) {
        console.warn('Error getting duck:', error);
      }
    );
  };

  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
    DuckFactory.getAll().then(
      function (response) {
        controller.allDucks = response.data;
        console.log('allDucks:', controller.allDucks);
      },
      function (error) {
        console.warn('Error getting ducks:', error);
      }
    );
  }

  init();
}

angular
  .module('DuckApp')
  .controller('DuckController', DuckController);
