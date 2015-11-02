/*!
 * @package: JED Starter App
 * 
 * @author Name: Andrea Gentil & Anibal Sanchez, JoomGap.com Email:
 * team[at]joomgap.com Url: http://www.JoomGap.com
 * 
 * @copyright Copyright (C) 2015 Andrea Gentil & Anibal Sanchez. All rights
 * reserved. 
 * 
 * @license http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
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

          .state('app.popular', {
            url: '/popular',
            views: {
              'menuContent': {
                templateUrl: 'templates/popular.html',
                controller: 'PopularCtrl'
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
