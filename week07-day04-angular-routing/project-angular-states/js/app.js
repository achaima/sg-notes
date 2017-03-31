function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../states/home.html'
    })
    .state('cats', {
      url: '/cats',
      templateUrl: '../states/cats.html'
    })
    .state('frisbee', {
      url: '/frisbee',
      templateUrl: '../states/frisbee.html'
    })
    .state('monsterTrucks', {
      url: '/monsterTrucks',
      templateUrl: '../states/monsterTrucks.html'
    });


  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);
