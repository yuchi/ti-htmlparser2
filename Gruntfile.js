'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    titaniumifier: {
      "module": {
        options: {
          as: "htmlparser2"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-titaniumifier');

  grunt.registerTask('build', [ 'titaniumifier:module' ]);

  grunt.registerTask('default', [ 'build' ]);
};
