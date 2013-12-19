module.exports = function(grunt) {
  grunt.initConfig({
  jasmine: {
    pivotal: {
      src: 'Src/**/*.js',
      options: {
        specs: 'Tests/spec/*Spec.js'
      }
    }
  }
});

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};