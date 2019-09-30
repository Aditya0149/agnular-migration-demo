declare var angular:any;
(function (angular) {
    angular
        .module('cloudlex.user')
        .controller('userHomeController', ['$rootScope', 'routeManager', '$scope',
            function ($rootScope, routeManager, $scope) {
                this.title = "Welcome to user home controller";
                routeManager.setBreadcrumb(['Home', 'User']);
                $scope.$emit('setUserName','User');
            }
        ]);

})(angular);
