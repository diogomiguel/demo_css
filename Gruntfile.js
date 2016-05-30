module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        dirs: {
            dist: 'dist',
            src: 'src',
            cssSrc: '<%= dirs.src %>/scss',
            cssDist: '<%= dirs.dist %>/css',
            vendor: 'vendor'
        },

        // Clean the temporary folders each time to start fresh
        clean: ['<%= dirs.cssDist %>'],

        // Generate CSS from SCSS
        compass: {
            dist: {
                options: {
                    environment: 'production',
                    httpPath: '/demo_css/',
                    cssDir: '<%= dirs.cssDist %>',
                    sassDir: '<%= dirs.cssSrc %>',
                    require: ['breakpoint']
                },                  
                files: {
                    '<%= dirs.cssDist %>/main.css': '<%= dirs.cssSrc %>/main.scss'
                }
            }
        },
                    
        // Auto reload Grunt tasks on JS and CSS changes
        watch: {
            css: {
                files: ['<%= dirs.cssSrc %>/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false
                }
            }
        }

    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', [
        'clean',
        'compass'
    ]);

    grunt.registerTask('default', [
        'clean',
        'compass',
        'watch'
    ]);
};