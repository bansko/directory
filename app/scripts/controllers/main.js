'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('MainCtrl', function ($scope) {
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
    $scope.tags = shuffle([
      'health',
      'walking',
      'hiking',
      'trekking',
      'mindfulness',
      'meditation',
      'relaxation',
      'cycling',
      'rafting',
      'boating',
      'running',
      'jogging',
      'fitness',
      'yoga',
      'pilates',
      'spa',
      'gym',
      'swimming',
      'exercise',
      'mindfulness',
      'mountain biking',
      'enduro',
      'trail',
      'sauna',
      'jacuzzi',
      'steam bath',
      'hot spring'
    ]).map(function(x){ return {text: x, size: getRandomSize(6)};});
  });
