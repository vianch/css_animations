module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    

    less: {
      development: {
        options: {
          paths: ["assets/less"],
          yuicompress: true
        },
        files: {
          "assets/css/animations.css": "assets/less/animations.less"
        }
      }
    },
    watch: {
        files: "./assets/less/*.less",
        tasks: ["less:development"]
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};