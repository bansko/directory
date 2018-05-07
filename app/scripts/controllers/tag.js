'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:TagCtrl
 * @description
 * # TagCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('TagCtrl', function ($scope, $routeParams, BusinessApi) {
    $scope.tagId = $routeParams.tagId;
    BusinessApi.query({}, function (businesses) {
      $scope.businesses = businesses.filter(x => x.tags.includes($routeParams.tagId));
      $scope.businesses = $scope.businesses.map(function(x, i) {
        BusinessApi.get({businessId: x.id}, function(b) {
          $scope.businesses[i] = {...$scope.businesses[i], ...b};
        })
        return x;
      });
    });
  });
