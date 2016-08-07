// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2016-02-06 using
// generator-karma 1.0.1

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'public/components/jquery/dist/jquery.js',
      'public/components/angular/angular.js',
      'public/components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'public/components/angular-animate/angular-animate.js',
      'public/components/angular-cookies/angular-cookies.js',
      'public/components/angular-resource/angular-resource.js',
      'public/components/angular-route/angular-route.js',
      'public/components/angular-sanitize/angular-sanitize.js',
      'public/components/angular-touch/angular-touch.js',
      'public/components/angular-translate/angular-translate.js',
      'public/components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'public/components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'public/components/angular-translate-storage-local/angular-translate-storage-local.js',
      'public/components/angular-translate-handler-log/angular-translate-handler-log.js',
      'public/components/angular-dynamic-locale/src/tmhDynamicLocale.js',
      'public/components/lodash/lodash.js',
      'public/components/elasticsearch/elasticsearch.js',
      'public/components/ng-tags-input/ng-tags-input.js',
      'public/components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
