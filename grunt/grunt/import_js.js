module.exports = {
  files: {
    expand: true,
    cwd: 'src/', // Look into this directory.
    src: ['*.js'], // Scan all javascript that matches this pattern.
    dest: 'assets/', // Put the resulting files into this directory.
    ext: '.js' // The extension to use.
  }
};