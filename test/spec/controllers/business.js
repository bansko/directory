'use strict';

describe('Controller: BusinessCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var BusinessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessCtrl = $controller('BusinessCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BusinessCtrl.awesomeThings.length).toBe(3);
  });
});
