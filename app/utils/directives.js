'use strict';

angular.module('cloudlex.directives', [])
.directive('user', function() {
    return {
      restrict: 'E',
      scope: {
        user: '=data'
      },
      template: '<h2>Hello {{user}}'
    };
  });