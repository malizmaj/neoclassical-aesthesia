module.exports = function(grunt) {

  grunt.initConfig({

    // Watches for changes and runs tasks
    // Livereload is setup for the 35729 port by default
    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['sass:dev'],
        options: {
          livereload: 35729
        }
      },
      change: {
        files: ['**/*.css','**/*.php'],
        options: {
          livereload: 35729
        }
      }
    },

 sass: {
        dev: {
            files: {
                // destination         // source file
                "style.css" : "sass/style.scss"
            }
        }
    }
  });

  // Default task
  grunt.registerTask('default', ['sass', 'watch']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};