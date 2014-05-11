'use strict';

describe('Directive: pageRow', function () {

  // load the directive's module
  beforeEach(module('blogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<page-row></page-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pageRow directive');
  }));
});
