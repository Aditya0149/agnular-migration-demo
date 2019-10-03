declare var angular: angular.IAngularStatic;
(function () {

    // Declare app level module which depends on views, and components
    angular.module('cloudlex.admin', [
        
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                template: `
                    <admin-home (set-user-name)="setUserName($event)"></admin-home>
                `
            })

    }])
})();

