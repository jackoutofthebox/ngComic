'use strict';

angular
  .module('blogApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/canvas', {
        templateUrl: 'views/canvas.html',
        controller: 'CanvasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
