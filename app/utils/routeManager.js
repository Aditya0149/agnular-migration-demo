(function (angular) {

    'use strict';

    angular
        .module('cloudlex')
        .factory('routeManager', routeManager);

    routeManager.$inject = ['$rootScope'];
    function routeManager($rootScope) {
        var currentState;
        var breadcrumb = [];
        function stateChangeStart(e, toState, toParams, fromState, fromParams) {
            if (toState.name.indexOf("user") > -1) $rootScope.user = true;
            else $rootScope.user = false;
        }

        function getCurrentState() {
            return currentState;
        }

        function onStateChangeSuccess(ev, to, toParam, from, fromParam) {
            currentState = to || stateName;
        }
        function setBreadcrumb(arr) {
            breadcrumb = arr;
        }
        function getBreadcrumb(state) {
            return breadcrumb;
        }
        return {
            stateChangeStart: stateChangeStart,
            onStateChangeSuccess: onStateChangeSuccess,
            getCurrentState: getCurrentState,
            setBreadcrumb:setBreadcrumb,
            getBreadcrumb:getBreadcrumb
        }
        
        
    }
})(angular);
