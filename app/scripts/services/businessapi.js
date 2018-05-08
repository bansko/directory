'use strict';

/**
 * @ngdoc service
 * @name directoryApp.BusinessApi
 * @description
 * # BusinessApi
 * Factory in the directoryApp.
 */
angular.module('directoryApp')
  .factory('BusinessApi', function ($resource) {
    var url = 'https://raw.githubusercontent.com/bansko/directory/master';
    return $resource(
      url,
      {
        businessId: '@_businessId'
      },
      {
        get: {
          url: url + '/directory/:businessId/index.json?' + Math.floor(Date.now()),
        },
        query: {
          url: url + '/directory/index.json?' + Math.floor(Date.now()),
          isArray: true
        }
      }
    );
});
