'use strict';

angular.module('cloudlex.filters', [])
    .filter('upperCase', function () {
        return function (item) {
            if (angular.isUndefined(item)) {
                return '';
            }
            return item.toLocaleUpperCase();
        }
    })