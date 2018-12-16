module.exports = {
  options: {
    livereload: true,
  },
  spec: {
    files: [
      './spec/**/*.yaml'
    ],
    tasks: ['build'],
  },
  server: {
    files: [
      'config/**/*.js',
      'api/**/*.js',
      'security/**/*.js',
      'lib/**/*.js'
    ],
    tasks: [],
  }
};
