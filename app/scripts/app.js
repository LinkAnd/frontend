'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'elasticsearch',
    'ngTagsInput',
    'ngSanitize',
    'ngMessages'
  ])
  .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
  .constant('LOCALES', {
    'locales': {
      'fr_fr': 'Français',
      'en_US': 'English'
    },
    'preferredLocale': 'en_US'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        'templateUrl' : 'views/contact.html',
        'controller'  : 'ContactCtrl',
        'controllerAs': 'abouts'
      })
      .when('/project', {
        'templateUrl' : 'views/project.html',
        'controller'  : 'ProjectCtrl',
        'controllerAs': 'project'
      })
      .when('/authorize/:accessToken', {
        'templateUrl' : 'views/main.html',
        'controller'  : 'AuthorizeCtrl',
        'controllerAs': 'authorize'
      })
      .when('/addProject', {
        'templateUrl' : 'views/addProject.html',
        'controller'  : 'addProjectCtrl',
        'controllerAs': 'addProject'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
   // Angular Translate
  .config(function ($translateProvider, DEBUG_MODE, LOCALES) {
    if (DEBUG_MODE) {
      $translateProvider.useMissingTranslationHandlerLog();// warns about missing translates
    }

    $translateProvider.useStaticFilesLoader({
      prefix: 'resources/locale-',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
    $translateProvider.useLocalStorage();
  })
  // Angular Dynamic Locale
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  });
