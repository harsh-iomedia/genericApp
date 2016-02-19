var genericApp = angular.module('genericApp', ['ionic']);

genericApp.run(['$ionicPlatform',function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}

		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

	});
}]);

genericApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.signup', {
		url: '/signup',
		views: {
			'menuContent': {
				templateUrl: 'templates/signup.html',
				controller:'signUpCtrl'
			}
		}
	})

	.state('app.optimizeSlides', {
		url: '/optimize-ion-slide-box',
		views: {
			'menuContent': {
				templateUrl: 'templates/optimizeIonSlideBox.html',
				controller:'optimizeSlidesCtrl'
			}
		}
	})

	.state('app.privacyScreenPlugin', {
		url: '/PrivacyScreenPlugin',
		views: {
			'menuContent': {
				templateUrl: 'templates/privacyScreenPlugin.html'
			}
		}
	})

	.state('app.sslcertificatechecker', {
		url: '/sslcertificatechecker',
		views: {
			'menuContent': {
				templateUrl: 'templates/sslcertificatechecker.html'
			}
		}
	})

	.state('app.disablensurlcache', {
		url: '/disablensurlcache',
		views: {
			'menuContent': {
				templateUrl: 'templates/disablensurlcache.html'
			}
		}
	})

	.state('app.danwilsongoogleanalytics', {
		url: '/danwilsongoogleanalytics',
		views: {
			'menuContent': {
				templateUrl: 'templates/danwilsongoogleanalytics.html'
			}
		}
	})

	.state('app.cordovacache', {
		url: '/cordovacache',
		views: {
			'menuContent': {
				templateUrl: 'templates/cordovacache.html'
			}
		}
	})
	
	.state('app.pushplugin', {
		url: '/pushplugin',
		views: {
			'menuContent': {
				templateUrl: 'templates/pushplugin.html'
			}
		}
	})


	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/playlists');
}]);
