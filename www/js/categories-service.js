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
angular
        .module('starter.categories-service', ['jgSimpleApi'])
        .factory(
                'Categories',
                function($q, jgSimpleApi) {

                  function query(params) {
                    var waitForData = $q.defer();
                    var url, q;

                    url = 'http://appscdn.joomla.org/webapps/index.php?format=json&option=com_apps&view=dashboard&product=Sm9vbWxhIQ==&release=My40&dev_level=NA==&list=grid&pv=MS4wLjU=';
                    q = jgSimpleApi.get(url, params).$promise;
 
                    q.then(function(response) { 
                      
                      if ((response) && (response.success)) {
                        waitForData.resolve(parseResponseCategories(response.data.html)); 
                      } else { 
                        // No data, just return
                        waitForData.resolve([]); 
                      }
                      
                    }).catch(function() { 
                      // No data, just return
                      waitForData.resolve([]); 
                    });
                    
                    return waitForData.promise;
                  };

                  function parseResponseCategories(html) {
                    var categories = [], htmlObject;

                    html = html.replace(/src/g, 'data_src');
                    htmlObject = angular.element(html);

                    var l1 = htmlObject.children().children();
                    var sidebar = l1[0];

                    var l3 = angular.element(sidebar);
                    var listOfCats = l3.children().children().children()
                            .children();

                    angular.forEach(listOfCats, function(li) {
                      var category = {};
                      var liObject = angular.element(li);

                      category.name = liObject.children().text();
                      category.link = liObject.children().attr('href');

                      // No header
                      if (category.link) {
                        var matches = category.link.match(/&id=([0-9]+)/);
                        
                        if (matches) {
                          category.id = matches[1];
                        } else {
                          category.id = 0;
                        }
                        
                        categories.push(category);
                      }
                    }); 

                    return categories;
                  };

                  // Public API
                  return {
                    query: query
                  };
                });
