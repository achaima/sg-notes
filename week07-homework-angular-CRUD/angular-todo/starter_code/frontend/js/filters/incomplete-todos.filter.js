angular
  .module('TodoApp')
  .filter('incompleteTodos', function(){
    return function(inputArray) {
      return inputArray.filter(function(element) {
        return !element.isComplete;
      });

    };
  });
