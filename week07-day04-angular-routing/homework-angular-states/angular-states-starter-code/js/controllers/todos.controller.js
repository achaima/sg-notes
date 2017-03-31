function AddToDoController() {
  var controller = this;


  controller.updateTodos = function(index) {
    controller.todos[index] = controller.updatedTodos[index];
    controller.updatedTodos = null;
    //Not sure about the last line
  };

  controller.deleteTodo = function(index) {
    controller.todos.splice(index,1);
  };


  controller.addTodo = function () {
    controller.todos.push(controller.newTodo);
    controller.newTodo='';
  };

  controller.isAddButtonDisabled = function () {
    return !controller.newTodo;
  };


  function init() {
    console.log('AddToDoController', controller);
    controller.newTodo = '';
    controller.updatedTodos = [];
    controller.todos = ['Wash dishes', 'Pay bills', 'Buy milk'];
    controller.title = 'To Do List:';
  }

  init();
}


angular
  .module('angularstates')
  .controller('AddToDoController', AddToDoController);
