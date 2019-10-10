
(function () {

    // Declare app level module which depends on views, and components
    angular.module('cloudlex.user', [
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('user', {
                url: '/user',
                template: `
                    <div>
                        {{user.title}}
                    </div>
                `,
                controller: 'userHomeController as user'
            })
            .state('angularUser', {
                url: '/angularUser',
                template: `
                    <angular-user></angular-user>
                `
            })

    }])
})();

