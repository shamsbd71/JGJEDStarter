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
angular.module('starter.extensions-service', ['jgSimpleApi'])
        .factory(
                'Extensions',
                function($q, jgSimpleApi) {

                  function query(params) {
                    var waitForData = $q.defer();
                    var url, q;

                     url = 'http://appscdn.joomla.org/webapps/index.php?format=json&option=com_apps&view=dashboard&product=Sm9vbWxhIQ==&release=My40&dev_level=NA==&list=grid&pv=MS4wLjU=';
                     q = jgSimpleApi.get(url, params).$promise;
                     
                     q.then(function(response) { 
                       
                       if ((response) &&(response.success)) {
                         waitForData.resolve(parseResponseExtensions(response.data.html)); 
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

                  function parseResponseExtensions(html) {
                    var categories = [], htmlObject;

                    html = html.replace(/src/g, 'data_src');
                    htmlObject = angular.element(html);

                    var l1 = htmlObject.children().children();
                    var main = l1[1];

                    var l4 = angular.element(main);
                    var l5 = l4.children();
                    var l6 = l5[1];
                    var l7 = angular.element(l6);
                    var l8 = l7.children().children();
                    var l9 = l8[0];
                    var l10 = angular.element(l9);
                    var listOfExts = l10.children();

                    var extensions = [];

                    angular.forEach(listOfExts, function(li) {
                      var liObject = angular.element(li);

                      if (liObject.hasClass('thumbnails')) {
                        var listOfExts2 = liObject.children();

                        angular.forEach(listOfExts2, function(liExt) {
                          var extension = {};
                          var liObjectExt = angular.element(liExt);
                          var ext = liObjectExt.children().children();

                          extension.rating = angular.element(ext[0]).text();

                          var div = angular.element(ext[1]);

                          var link = div.attr('onclick');
                          extension.link = link.replace(
                                  "Joomla.loadweb(apps_base_url+'", '')
                                  .replace("');", '');

                          var le2 = div.children();

                          extension.img = angular.element(le2[0]).children()
                                  .attr('data_src');
                          
                          extension.type = angular.element(le2[1]).text().trim();
                          extension.type = extension.type.split(' ');
                          
                          extension.name = angular.element(le2[2]).text();
                          extension.desc = angular.element(le2[3]).text();
                          
                          var matches = extension.link.match(/&id=([0-9]+)/);
                          
                          if (matches) {
                            extension.id = matches[1];
                          } else {
                            extension.id = 0;
                          }                          

                          extensions.push(extension);
                        });
                      }
                    });

                    return extensions;
                  }

                  // Public API
                  return {
                    query: query
                  };
                });
