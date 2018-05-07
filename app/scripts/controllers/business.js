'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:BusinessCtrl
 * @description
 * # BusinessCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('BusinessCtrl', function ($scope, $http, $routeParams, BusinessApi) {
    $scope.businessId = $routeParams.businessId;
    BusinessApi.get({ businessId: $routeParams.businessId }, function (business) {
      $scope.business = business;
      $http.get(business.markdown + '?' + Math.floor(Date.now())).then(
        function(response) {
          $scope.response = response;
          $scope.markdown = response.data;
        },
        function(responseError) {
        }
      );
    });
  });
