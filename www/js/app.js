var genericApp = angular.module('genericApp', ['ionic','jrCrop','ionic.contrib.drawer']);

genericApp.run(['$ionicPlatform','CONSTANTS', function($ionicPlatform,CONSTANTS) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}

		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

		CONSTANTS.isDevice = ionic.Platform.device().available;
	});
}]);

genericApp.config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider', function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	$ionicConfigProvider.views.transition('none');
	$ionicConfigProvider.views.swipeBackEnabled(false);

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
	.state('app.imageCrop', {
		url: '/imageCrop',
		views: {
			'menuContent': {
				templateUrl: 'templates/imageCrop.html',
				controller:'imageCropCtrl'
			}
		}
	})
	.state('app.screenOrientation', {
		url: '/screenorientation',
		views: {
			'menuContent': {
				templateUrl: 'templates/screenOrientation.html',
				controller:'screenOrientationCtrl'
			}
		}
	})
	.state('app.shrinkingHeader', {
		url: '/shrinkingHeader',
		views: {
			'menuContent': {
				templateUrl: 'templates/shrinkingHeader.html',
				controller:'shrinkingHeaderCtrl'
			}
		}
	})
	.state('app.keypadGo', {
		url: '/keypadGo',
		views: {
			'menuContent': {
				templateUrl: 'templates/keypadGo.html'
			}
		}
	})
	.state('app.searchBtn', {
		url: '/searchBtn',
		views: {
			'menuContent': {
				templateUrl: 'templates/searchBtn.html'
			}
		}
	})
	.state('app.detailRegEx', {
		url: '/detailRegEx',
		views: {
			'menuContent': {
				templateUrl: 'templates/detailRegEx.html'
			}
		}
	})
	.state('app.jsonToScss',{
		url:'/jsonToScss',
		views:{
			'menuContent':{
				templateUrl:'templates/jsonToScss.html',
				controller:'jsonToScssCtrl'
			}
		}
	})
	.state('app.dynamicInput',{
		url:'/dynamic-input',
		resolve:{
			jsonData:['$q','$http', function($q,$http){
				var deferred = $q.defer();
				$http({
					url: './lib/inputFieldJson/dynamicInput.json',
					method:"GET"
				})
				.success(angular.bind(this,function(data, status, headers, config) {
					deferred.resolve(data, status);
				}))
				.error(angular.bind(this,function(data, status, headers, config) {
					deferred.reject(data, status);
				}));
				return deferred.promise;
			}]
		},
		views:{
			'menuContent':{
				templateUrl:'templates/dynamicInput.html',
				controller:'dynamicInputCtrl'
			}
		}
	})
	.state('app.performance',{
		url:'/performance',
		views:{
			'menuContent':{
				templateUrl:'templates/performance.html',
				controller:'performanceCtrl'
			}
		}
	})
	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/signup');
}]);
