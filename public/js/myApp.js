angular.module('myApp', ['ngRoute', 'xeditable']);

var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider) {
    // set up configuration

    // Routes
    $routeProvider
      .when('/', {
        templateUrl: '/templates/dashboard.html',
        controller: 'MyController'
      })
      .when('/404', {
        templateUrl:'/templates/404.html'
      })
      .otherwise('/404');
  })
  .run([
    '$rootScope',
    'APP_VERSION',
    'editableOptions',
    function ($rootScope, APP_VERSION, editableOptions) {
      $rootScope.version = APP_VERSION;
      // editableOptions.theme = 'bs3';
    }
  ]);