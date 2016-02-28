angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider) {
    // set up configuration

    // Routes
    
  })
  .run([
    '$rootScope',
    'APP_VERSION',
    function ($rootScope, APP_VERSION) {
      $rootScope.version = APP_VERSION;
    }
  ]);