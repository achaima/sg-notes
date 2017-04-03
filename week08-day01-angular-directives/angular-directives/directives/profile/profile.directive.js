angular
  .module('angularDirectives')
  .directive('profile', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/profile/profile.directive.html',
      scope: {
        person: '='
      }
    };
  });

  //'E' is shorthand for element - it means this directory has to be implements by an element. Other directives include attributes.
