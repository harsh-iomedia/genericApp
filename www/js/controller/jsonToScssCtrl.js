genericApp.controller('jsonToScssCtrl', ['$scope', function($scope){
	var scss = '$someVar: 123px; .some-selector { width: $someVar; }';
  var customvar = '$varCustom:#000;';
  Sass.writeFile('one.scss', customvar);
  Sass.compile(scss, function(result) {
    console.log(result);
    /*Sass.compile('@import "one";', function(result) {
		  console.log(result.text);
		});*/
  });
}])