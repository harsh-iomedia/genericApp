genericApp.controller('performanceCtrl', ['$scope','$timeout', function($scope,$timeout){
	$scope.Test1 = '';
	$scope.Test2 = '';

  $scope.foo = function() {
    for(var i = 0; i < 10000000; i++);
  }
  $scope.bar = function() {
    for(var i = 0; i < 10000000; i++);
  }

  $scope.getPrefix = function() {
    var prefix = null;
    if (window.performance !== undefined) {
      if (window.performance.now !== undefined)
        prefix = "";
      else {
        var browserPrefixes = ["webkit","moz","ms","o"];
        // Test all vendor prefixes
        for(var i = 0; i < browserPrefixes.length; i++) {
          if (window.performance[browserPrefixes[i] + "Now"] != undefined) {
            prefix = browserPrefixes[i];
            break;
          }
        }
      }
    }
    return prefix;
  }

  $scope.getTime = function() {
    return (prefix === "") ? window.performance.now() : window.performance[prefix + "Now"]();
  }

  $scope.doBenchmark = function() {
    if (prefix === null)
      document.getElementById("log").innerHTML = "Your browser does not support High Resolution Time API";
    else {
      var startTime = $scope.getTime();
      $scope.foo();
      var test1 = $scope.getTime();
      $scope.bar();
      var test2 = $scope.getTime();
      $scope.Test1 = "Test1 time: " + (test1 - startTime);
      $scope.Test2 = "Test2 time: " + (test2 - test1);
    }
  }
  var prefix = $scope.getPrefix();
  $timeout(function(){
  	$scope.doBenchmark();
  }, 1000);
}]);