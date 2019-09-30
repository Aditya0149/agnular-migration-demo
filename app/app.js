(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('cloudlex', [
        'ui.router',
        'cloudlex.filters',
        'cloudlex.directives',
        'cloudlex.user',
        'cloudlex.admin'
    ])
    
    function bootstrapAngular() {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ["cloudlex"]);

        });
    }
    bootstrapAngular();
})();

