'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('MainCtrl', function ($scope, BusinessApi) {
    function getRandomSize(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
    BusinessApi.query({}, function (businesses) {

      $scope.tags = shuffle(Array.from(new Set([].concat.apply([], businesses.map(function(x){ return x.tags;}))))).map(function(x){ return {text: x, size: getRandomSize(6)};});
    });
  });
