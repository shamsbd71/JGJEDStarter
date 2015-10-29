/**
 * @package       Joomla.Apps
 * @subpackage    com_apps
 * 
 * @author        Anibal Horacio Sanchez Perez @anibal_sanchez
 * 
 * @copyright     Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @link          http://extensions.joomla.org
 */

/* globals angular,cordova */

"use strict";
angular.module('starter', ['ionic', 'starter.controllers', 'jgSimpleApi'])

.run(
        function($ionicPlatform) {
          $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the
            // accessory bar above the keyboard
            // for form inputs)
            if ((window.cordova) && (window.cordova.plugins)
                    && (window.cordova.plugins.Keyboard)) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
              // org.apache.cordova.statusbar required
              StatusBar.styleDefault();
            }
          });
        })

.config(
        function($stateProvider, $urlRouterProvider, $logProvider,
                $compileProvider, $ionicConfigProvider) {

          $logProvider.debugEnabled(false);
          $compileProvider.debugInfoEnabled(false);
          $ionicConfigProvider.scrolling.jsScrolling(false);

          $stateProvider

          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
          })
          
          .state('app.categories', {
            url: '/categories',
            views: {
              'menuContent': {
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesCtrl'
              }
            }
          })

          .state('app.browse', {
            url: '/browse',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html',
                controller: 'ExtensionsCtrl'
              }
            }
          })          

          .state('app.search', {
            url: '/search',
            views: {
              'menuContent': {
                templateUrl: 'templates/search.html'
              }
            }
          })

          .state('app.single', {
            url: '/categories/:categoryId',
            views: {
              'menuContent': {
                templateUrl: 'templates/category.html',
                controller: 'PlaylistCtrl'
              }
            }
          });
          
          // if none of the above states are matched, use this as the fallback
          $urlRouterProvider.otherwise('/app/categories');
        });
