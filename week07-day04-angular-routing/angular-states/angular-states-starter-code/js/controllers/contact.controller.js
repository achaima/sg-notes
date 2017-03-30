function ContactController() {
  var controller = this;

  function init() {
    console.log('ContactController', controller);
    controller.title = 'Contact us';
  }

  init();
}


angular
  .module('angularstates')
  .controller('ContactController', ContactController);
