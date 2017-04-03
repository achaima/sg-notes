function TodoFactory (API_URL, $http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: `${API_URL}/todos`
      });
    },
    getOne: function(todoId) {
      return $http({
        method: 'GET',
        url: `${API_URL}/todos/${todoId}`
      });
    },
    createOne: function(newTodo) {
      return $http({
        method: 'POST',
        url: `${API_URL}/todos`,
        data: newTodo
      });
    },
    deleteOne: function(todoId) {
      return $http({
        method: 'DELETE',
        url: `${API_URL}/todos/${todoId}`
      });
    },
    // markOneComplete: function(todoId) {
    //   var data = {
    //     isComplete: true
    //   };
    //   return $http({
    //     method: 'PATCH',
    //     url: `${API_URL}/todos/${todoId}`,
    //     data: data
    //   });
    // },
    //
    // markOneIncomplete: function(todoId) {
    //   var data = {
    //     isComplete:
    //   };
    //   return $http({
    //     method: 'PATCH',
    //     url: `${API_URL}/todos/${todoId}`,
    //     data: data
    //   });
    // },


    editOne: function(editedTodo) {
      return $http({
        method: 'PATCH',
        url: `${API_URL}/todos/${editedTodo._id}`,
        data: editedTodo
      });
    }

  };
}

angular
  .module('TodoApp')
  .factory('TodoFactory', TodoFactory);
