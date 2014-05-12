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
      .when('/canvas', {
        templateUrl: 'views/canvas.html',
        controller: 'CanvasCtrl'
      })
      .otherwise({
        redirectTo: '/canvas'
      });
  });
