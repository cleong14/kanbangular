angular.module('myApp', ['xeditable']);

var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider) {
    // set up configuration

    // Routes
    
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