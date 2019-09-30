declare var angular:any;
(function () {

    // Declare app level module which depends on views, and components
    angular.module('cloudlex.admin', [
        
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                template: `
                    <div>
                        {{admin.title}}
                    </div>
                `,
                controller: 'adminHomeController as admin'
            })

    }])
})();

