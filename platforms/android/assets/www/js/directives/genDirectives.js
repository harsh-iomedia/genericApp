/*
  It is used to optimize the Ion-Slide-Box.
*/
genericApp.directive('optimizeSlides', function () {
  return {
    link: function (scope, elem, attrs) {
      scope.$watch(function () {
        return scope.$eval(attrs.activeSlide);
      },function (val) {
        var array = [scope.$eval(attrs.activeSlide), scope.$eval(attrs.activeSlide) + 1, scope.$eval(attrs.activeSlide) - 1];
        for (var i = 0, len = scope.$eval(attrs.optimizeSlides).length; i < len; i++) {
          if (array.indexOf(i)>-1) {
            scope.$eval(attrs.optimizeSlides)[i].show = true;
          } 
          else {
            if(scope.$eval(attrs.optimizeSlides)[i].id=='1'){
              scope.$eval(attrs.optimizeSlides)[i].show = true;
	          }else{
              scope.$eval(attrs.optimizeSlides)[i].show = false;
            }
          }
        }
      });
    }
  }
});




/*
  It is used to navigate the form, one field to another field by pressing mobile keypad 'GO' button.
  
  //Jquery Method.
  // var fields = $(this).parents('form:eq(0),body').find('input');
  // var index = fields.index(this);
*/
genericApp.directive('enter', function() {
  return{
    restrict: 'ACE',
    link: function(scope, element, attrs) {
      element.bind("keydown keypress", function(event) {
        if (event.which === 13) {
          event.preventDefault();
          var forms = angular.element(event.currentTarget)[0].form;
          var fields = angular.element(forms).find('input');
          for(var i=0;i<fields.length;i++){
            if(fields[i] == this){
              var index = i;
              console.log("true",i)
            }
          }
          if(index > -1 && (index + 1) < fields.length){
            fields.eq(index + 1)[0].focus();
          }
        }
      });
    }
  }
});
