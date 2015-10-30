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
angular.module('starter.controllers', ['jgSimpleApi', 'starter.categories-service', 'starter.extensions-service'])

.controller('AppCtrl', function($scope) {
})

.controller('CategoriesCtrl', function($scope, Categories) {
  Categories.query().then(function(cats) {
    $scope.categories = cats;
  });
})

.controller('ExtensionsCtrl', function($scope, Extensions) {
  Extensions.query().then(function(exts) {
    $scope.extensions = exts;
  });  
});
