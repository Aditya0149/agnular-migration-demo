(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('cloudlex.admin', [
        
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'admin/home/admin-home.html',
                controller: 'adminHomeController as admin'
            })

    }])
})();

