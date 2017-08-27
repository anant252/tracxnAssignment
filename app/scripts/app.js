'use strict';

/**
 * @ngdoc overview
 * @name tracxnprojectApp
 * @description
 * # tracxnprojectApp
 *
 * Main module of the application.
 */
angular
  .module('tracxnprojectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch','ui.tree'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
