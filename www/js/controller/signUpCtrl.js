genericApp.controller('signUpCtrl', ['$scope', function($scope){

	$scope.args = {"name_first":"","name_last":"","street_addr_1":"","street_addr_2":"","country":"","city":"","state":"","zip":""};

	$scope.signUpFormSubmit = function (formData) {
		console.log(formData);
	}
}]);