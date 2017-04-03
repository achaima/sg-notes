/* global firebase */

function AuthRun() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCECIZXzD_OopY69SFKDfUUNGJ8nZ4DH78',
    authDomain: 'angularauth-bab16.firebaseapp.com',
    databaseURL: 'https://angularauth-bab16.firebaseio.com',
    projectId: 'angularauth-bab16',
    storageBucket: 'angularauth-bab16.appspot.com',
    messagingSenderId: '536243019964'
  };

  firebase.initializeApp(config);
}


function AuthFactory ($firebaseAuth) {
  return $firebaseAuth();
}

AuthFactory.$inject = ['$firebaseAuth', '$http'];

angular
  .module('myApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
