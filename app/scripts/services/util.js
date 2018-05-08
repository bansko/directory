'use strict';

/**
 * @ngdoc service
 * @name directoryApp.util
 * @description
 * # util
 * Factory in the directoryApp.
 */
angular.module('directoryApp')
  .factory('util', function () {
    return {
      shuffle: function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
        return a;
      }
    };
  });
