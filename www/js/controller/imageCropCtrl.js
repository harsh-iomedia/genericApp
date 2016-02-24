genericApp.controller('imageCropCtrl', ['$scope','CONSTANTS','$jrCrop', function($scope,CONSTANTS,$jrCrop){
	
	$scope.isCroppingToolVisible = false;
  $scope.croppedImageURL = "";
  $scope.isImageUploaded = false;
  $scope.resultedImage = '';

	$scope.showGallery = function () {
	 	$scope.isCroppingToolVisible = true;
    var pictureSource = navigator.camera.PictureSourceType;
    var destinationType = navigator.camera.DestinationType;
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL,
        correctOrientation: true,
        targetWidth:CONSTANTS.DEVICE_WIDTH,
        targetHeight:CONSTANTS.DEVICE_HEIGHT,
      	sourceType: pictureSource.SAVEDPHOTOALBUM });
	}

	function onPhotoURISuccess(imageURI) {
    $scope.isCroppingToolVisible = true;
    var imageURL = "data:image/jpeg;base64," +imageURI;
    $scope.showImageUploaderPopup(imageURL);
  }
  function onFail(e){
    console.log("error", e);
  }

  $scope.showImageUploaderPopup = function(imageURL) {
    $scope.isImageUploaded = true;
    $jrCrop.crop({
	    url: imageURL,
  	  width:200,
    	height:100
    }).then(function(canvas) {
      $scope.croppedImageURL = canvas.toDataURL('image/png', 1.0);
      $scope.saveCroppedImage();
    });
  }
  $scope.saveCroppedImage = function () {
    $scope.isCroppingToolVisible = false;
    $scope.resultedImage = $scope.croppedImageURL;
  }

}]);