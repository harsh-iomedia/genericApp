genericApp.controller('AppCtrl',['$scope','CONSTANTS','$ionicGesture','$timeout', function($scope,CONSTANTS,$ionicGesture,$timeout) {
	document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
  	CONSTANTS.DEVICE_WIDTH =   ((window.innerWidth < window.innerHeight))?window.innerWidth:window.innerHeight;
    CONSTANTS.DEVICE_HEIGHT =   ((window.innerWidth < window.innerHeight))?window.innerHeight:window.innerWidth;
  }
  function offlineHandler() {
  	console.log("offline");
  }

  // $scope.openDrawer();$scope.closeDrawer();
  $scope.showOnMenuOpen = false; 
	$scope.openSideMenu = function(){
    $scope.openDrawer();
    $scope.showOnMenuOpen = true;
  }
  $scope.closeSideMenu = function(){
    var timer = $timeout(function(){
      $scope.showOnMenuOpen = false;
      timer = null;
    },100)
    $scope.closeDrawer();
  }
  $ionicGesture.on('swipeleft', function(e){
		$scope.closeDrawer();
 	}, angular.element(document.querySelector('#drawerSideMenu')));
}]);