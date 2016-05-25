genericApp.controller('shrinkingHeaderCtrl', ['$scope', function($scope){
  loadView();
  
  function loadView() {
    $scope.items = [];
    
    for (var i = 0; i < 50; i++) {
      $scope.items.push({ id: i });  
    }
  }
}]);