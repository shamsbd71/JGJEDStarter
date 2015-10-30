/*!
 * @package: JoomGap Library
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

/* globals angular */

"use strict";

angular.module('jgSimpleApi', ['ngResource'])
  .factory('jgSimpleApi', ['$resource',

    function($resource) {
    "$resource:nomunge";
    
    var _this = this;
    
    _this.getResource = function(apiMethodUrl, parameters, success, error) {
    
      _this.webResource = $resource(apiMethodUrl, {}, {
        get: {
          method: 'JSONP',
          callback: 'JSON_CALLBACK',
          params: {
            callback: 'JSON_CALLBACK'
          }
        }
      });
    
      return _this.webResource.get(parameters, success, error);
    };
    
    return {
      get: _this.getResource
    };

  }]);
