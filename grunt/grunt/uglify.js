module.exports = {
  options: {
    banner: '/*! <%= package.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
    compress: true,
  },
  prod: {
    files: [{
      expand: true,
      cwd: 'assets/', // Look into this directory.
      src: '*.js', // Scan all javascript that matches this pattern.
      dest: 'build', // Put the resulting files into this directory.
      ext: '.min.js', // The extension to use.
    }]
  }
};