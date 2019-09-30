import constants from "./constant";
declare var angular:any;

(function (angular) {
    angular
        .module('cloudlex')
        .controller('rootController', ['$rootScope', '$scope','$state','routeManager',
            function ($rootScope, $scope, $state, routeManager) {
                $rootScope.title = "Angular.js";
                $scope.user = '';
                $scope.links = constants.links;
                $scope.breadCrumb = routeManager.getBreadcrumb();
                $rootScope.$on('$stateChangeStart',
                    function(event, toState, toParams, fromState, fromParams, options){ 
                        console.log('stateChangeStart');
                    });
                $rootScope.$on('$stateChangeSuccess', 
                    function() {
                        console.log('stateChangeSuccess' )
                    }
                );
                $rootScope.$on('$locationChangeSuccess', 
                    function() {
                        $scope.breadCrumb = routeManager.getBreadcrumb();
                    }
                );
                routeManager.setBreadcrumb(['Home']);
                $scope.$on("setUserName", function(event,args) {
                    $scope.user = args;
                })
            }
        ]);

})(angular);
