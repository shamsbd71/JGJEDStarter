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
