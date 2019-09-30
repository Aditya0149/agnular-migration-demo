declare var angular:any;
(function (angular) {
    angular
        .module('cloudlex.admin')
        .controller('adminHomeController', ['$rootScope', 'routeManager', '$scope', 
            function ($rootScope, routeManager, $scope) {
                this.title = "Welcome to admin home controller";
                routeManager.setBreadcrumb(['Home', 'Admin']);
                $scope.$emit('setUserName','Admin');
            }
        ]);

})(angular);
