'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('MainCtrl', function ($scope, BusinessApi, util) {
    BusinessApi.query({}, function (businesses) {
      var min = 0, max = 0;
      var counts = {};
      var allTags = [].concat.apply([], businesses.map(function(x){ return x.tags;}));
      allTags.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
      for (var key in counts) {
        if (Object.prototype.hasOwnProperty.call(counts, key)) {
          max = Math.max(max, counts[key]);
          min = Math.min(min, counts[key]);
        }
      }
      $scope.tags = util.shuffle(Array.from(new Set(allTags))).map(function(x) {
        return {
          text: x,
          count: counts[x],
          size: Math.round((counts[x] / max) * 5)
        };
      });
    });
  });
