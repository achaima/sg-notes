angular
  .module('angularDirectives')
  .directive('profile', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/profile/profile.directive.html',
      scope: {
        person: '='
      },
      link: function (scope/*, element, attrs*/) {
        scope.showSkills = false;

        scope.toggleSkills = function() {
          scope.showSkills = !scope.showSkills;
        };
      }
    };
  });

  //'E' is shorthand for element - it means this directory has to be implements by an element. Other directives include attributes.
//attrs short for attributes
//link allows us to view ..... for the method
