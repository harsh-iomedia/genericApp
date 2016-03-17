genericApp.controller('screenOrientationCtrl', ['$scope','$timeout', function($scope,$timeout){
	$scope.currentOrientation = screen.orientation.type;
	window.addEventListener("orientationchange", function(){
		$timeout(function(){
			$scope.currentOrientation	= screen.orientation.type;
		},100);
	});
	$scope.enableScreenOrientation = function(){
		screen.unlockOrientation();
	}
	$scope.disableScreenOrientation = function(){
		screen.lockOrientation('portrait');
	}
}]);