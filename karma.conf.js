// Karma configuration
// Generated on Wed Oct 19 2016 09:49:07 GMT-0700 (PDT)

const webpack= require('./webpack.config.js');
webpack.entry = {};

module.exports = function(config) {
  config.set({
    webpack,
    port: 9876,
    colors: true,
    basePath: '',
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    logLevel: config.LOG_INFO,
    preprocessors: {
      'test/**/*-test.js': ['webpack'],
      'app/entry.js': ['webpack'],
    },
    files: [
      'app/entry.js',
      'test/**/*-test.js',
      'node_modules/angular-mocks/angular-mocks.js',
    ],
  });
};
