module.exports = function(grunt) {
  // Define the scope for load-grunt-tasks to create a
  // grunt.loadNpmTasks() for the packages degined in package.json
  var tasks = {scope: ['devDependencies', 'dependencies']};
  
  // Define where load-grunt-config should look for grunt task options.
  var options = {config: { src: [
    'package.json',
    'grunt/*.js'
  ]}};
  
  // Get load-grunt-configs and give it the defined options.
  var configs = require('load-grunt-configs')(grunt, options);
  
  // Get load-grunt-tasks and give it the defined tasks.
  require('load-grunt-tasks')(grunt, tasks);
  
  // Give the configs to initConfig()
  grunt.initConfig(configs);
  
  // Register tasks.
  grunt.registerTask('default', 'Build for distribution', ['import_js', 'uglify']);
  grunt.registerTask('dev', 'Build and watch', ['import_js', 'uglify', 'watch']);
};