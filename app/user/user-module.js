(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('cloudlex.user', [
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: 'user/home/user-home.html',
                controller: 'userHomeController as user'
            })

    }])
})();

