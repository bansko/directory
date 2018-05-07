'use strict';

describe('Service: BusinessApi', function () {

  // load the service's module
  beforeEach(module('directoryApp'));

  // instantiate service
  var BusinessApi;
  beforeEach(inject(function (_BusinessApi_) {
    BusinessApi = _BusinessApi_;
  }));

  it('should do something', function () {
    expect(!!BusinessApi).toBe(true);
  });

});
