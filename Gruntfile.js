(function () {
    'use strict';
}());

var version = (new Date()).getTime();

module.exports = function (grunt) {

    // Load grunt tasks automatically
    grunt.loadNpmTasks('grunt-contrib-connect');


    var serveStatic = require('serve-static');

    var appConfig = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({
        
        connect: {
            options: {
                port: 8000,
                protocol: 'https',
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect, options, middlewares) {
                        return [
                            serveStatic('.tmp'),
                            connect().use(
                                '/bower_components',
                                serveStatic('./bower_components')
                            ),
                            serveStatic(appConfig.app)
                        ];
                    }
                }
            }
        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        grunt.task.run([
            'connect:livereload:keepalive'
        ]);
    });

};

