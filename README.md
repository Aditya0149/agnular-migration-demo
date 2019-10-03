1. Create a new directory inside the src folder to store all newly created Angular components.
2. Creating new Angular components
    1. Create a new Angular component (here for only testing perpose) inside that directory.
    2. Downgrade this component using ngUpgrade library as a directive.
    3. Register this directive on a respective module and start using.
3. Migrating components
    1. Rewrite the controller of angular.js as new component in Angular.
    2. Downgrade this Angular component (as angular.js directive) and use it in the ui router of        angular.js.
    3. Pass the dependacies.
4. Migrating services
    1. Rewrite the service in Angular.
    2. Downgrade this service and use it in angular.js wherever required.
5. Migrating directives
    1. We have to rewrite angular.js directives as a component or directive based on the functionality.
    2. Downgrade this Angular component/directive to use it in angular.js app.
6. Migrating filters/pipes
    1. We can not upgrade/downgrade filters or pipes.
    2. We can seperate out the function used for filter in a file and use it for both angular.js pipe and Angular filter.
7. Move all other shared variables in sepereate files and export them.               