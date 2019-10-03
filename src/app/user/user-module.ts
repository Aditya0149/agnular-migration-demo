declare var angular: angular.IAngularStatic;
(function () {

    // Declare app level module which depends on views, and components
    angular.module('cloudlex.user', [
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('user', {
                url: '/user',
                template: `
                    <user-home (set-user-name)="setUserName($event)"></user-home>
                `
            })
            .state('angularUser', {
                url: '/angularUser',
                template: `
                    <angular-user (set-user-name)="setUserName($event)"></angular-user>
                `
            })

    }])
})();

