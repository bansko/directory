'use strict';

/**
 * @ngdoc overview
 * @name directoryApp
 * @description
 * # directoryApp
 *
 * Main module of the application.
 */
angular
  .module('directoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hc.marked'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tag/:tag', {
        templateUrl: 'views/tag.html',
        controller: 'TagCtrl',
        controllerAs: 'tag'
      })
      .when('/directory/:businessId', {
        templateUrl: 'views/business.html',
        controller: 'BusinessCtrl',
        controllerAs: 'business'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
