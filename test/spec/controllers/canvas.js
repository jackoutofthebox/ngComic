'use strict';

describe('Controller: CanvasCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var CanvasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CanvasCtrl = $controller('CanvasCtrl', {
      $scope: scope
    });
  }));

});
