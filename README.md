# JED Starter App

Find extensions for your Joomla site in the Joomla Extensions Directory, the official directory for Joomla components, modules and plugins.

A JoomGap starter project to create a hybrid mobile app for Joomla! CMS, powered by Cordova/PhoneGap, AngularJS and Ionic.

This project is the product of many years of iterative development and
combined community knowledge from open source projects. It does not impose a specific development
philosophy or framework, so you're free to architect your code in the
way that you want.

* Homepage: [http://www.joomgap.com/](http://www.joomgap.com/)
* Source: [https://github.com/JoomGap/JGBoilerplate](https://github.com/JoomGap/JGBoilerplate)
* Twitter: [@JoomGap](https://twitter.com/JoomGap)

## Quick start

Choose one of the following options:

1. Download the latest stable release from
   [joomgap.com](http://www.joomgap.com/joomgap-boilerplate.html).
2. Clone the git repo — `git clone
   https://github.com/JoomGap/JGBoilerplate.git` - and checkout the
   [tagged release](https://github.com/JoomGap/JGBoilerplate/releases)
   you'd like to use.
3. Create a new App in [PhoneGap build](https://build.phonegap.com).
4. Build and download APK (Android) or IPA (iOS) file.
5. Copy the file to your mobile phone and install it.
6. Have fun!

## How to integrate JG Boilerplate with Joomla! CMS

JG Boilerplate includes [JoomGap Simple Library](https://github.com/JoomGap/JGSimple) to integrate Joomla! CMS.

A call to Joomla! can be simply implemented in this way:

	q = jgSimpleApi.get(url, params).$promise;
	q.then(function(response) {
		if ( (response) && (response.success) ) {
			console.log(response.data);
		}
	}
	
## Concerning to security measures

There are multiple security measures on browsers and server to prevent abuse. 

In a Cordoba/PhoneGap mobile app, a mobile brower speaks with a web server with Joomla! CMS. Then, there are at least three security layers:

- Mobile browser
- Web server
- Joomla! CMS

> JG Boilerplater is mainly oriented for development. So, a permissive security policy has been implemented.

### Production security policy

This is a checklist of security items to evaluate before publishing an app:

- Latest Cordoba/PhoneGap version
- Required plugins
- android:debuggable="false", to disable Android debugging
- Required device permissions
- [HTTP access control (CORS)](http://www.html5rocks.com/en/tutorials/cors/)
	- access origin
- [Whitelist policy](https://github.com/apache/cordova-plugin-whitelist#cordova-plugin-whitelist)	
	- allow-intent
	- allow-navigation
	- allow-intent 
- [Content-Security-Policy](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
- AngularJS
	- $logProvider.debugEnabled(false);
	- $compileProvider.debugInfoEnabled(false);
	
### Joomla and Cross-Origin Resource Sharing (CORS)

The same security points have to be evaluated to allow access from a different security domain that the source site domain.

JG Boilerplate opens connections via [JSON-P](http://en.wikipedia.org/wiki/JSONP) to standard Joomla! sites. In [JoomGap Simple Library](https://github.com/JoomGap/JGSimple), connections are handled with [AngularJS $resource](https://docs.angularjs.org/api/ngResource/service/$resource).

## Features

* Cordoba/PhoneGap mobile application.
* Includes:
  * Cordoba/PhoneGap project
  * PhoneGap (iOS / Android / Windows)
  * [PhoneGap build](https://build.phonegap.com)-ready configuration
  * AngularJS
  * AngularJS Animate
  * AngularJS Resource
  * AngularJS Sanitize
  * AngularJS UI Router
  * [JoomGap Simple Library](https://github.com/JoomGap/JGSimple)
  * Ionic Framworks
  * ngCordova

## Useful Commands

Start a local development server for app dev/testing.

	ionic serve	
	
Compile Saas to build stylesheets.

	gulp
	
Updating Ionic. Update bower.json, driftyco/ionic-bower#....

	gulp install

## Mobile operating system support

* Android 4 and 5
* Apple iOS 8 and 9

*This doesn't mean that JoomGap Boilerplate cannot be used in older OS,
just that we'll ensure compatibility with the ones mentioned above.*

## Screenshots

### Installation Step 1 - Android

![Installation Step 1 - Android](http://cdn.joomgap.com/images/JGBoilerplate/JGBoilerplate-1-install.jpg)

### Installation Step 2 - Android

![Installation Step 2 - Android](http://cdn.joomgap.com/images/JGBoilerplate/JGBoilerplate-2-install.jpg)

### Welcome screen - Android

![Welcome screen - Android](http://cdn.joomgap.com/images/JGBoilerplate/JGBoilerplate-3-start.jpg)

## License

The code is available under the [GNU GENERAL PUBLIC LICENSE Version 3](LICENSE).
