'use strict';

describe('Service: Registry', function () {

  // load the service's module
  beforeEach(module('blogApp'));

  // instantiate service
  var Registry;
  beforeEach(inject(function (_Registry_) {
    Registry = _Registry_;
  }));

  it('should do something', function () {
    expect(!!Registry).toBe(true);
  });

});
