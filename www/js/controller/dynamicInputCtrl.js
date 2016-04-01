genericApp.controller('dynamicInputCtrl', ['$scope','jsonData', function($scope,jsonData){
	console.log(jsonData);
	$scope.args = {};
	$scope.jsonInputs = jsonData;


	$scope.signUpFormSubmit = function(formData){
		console.log(formData,$scope.args);
	}
}]);

genericApp.filter('isArray', function() {
  return function (input) {
    return angular.isArray(input);
  };
});