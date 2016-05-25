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


/* Shrinking Header */
genericApp.directive('headerShrink',['$document', function($document) {
  var fadeAmt;

  var shrink = function(header, content, amt, max) {
    amt = Math.min(max, amt);
    fadeAmt = 1 - amt / max;
    ionic.requestAnimationFrame(function() {
      header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + amt + 'px, 0)';
      for(var i = 0, j = header.children.length; i < j; i++) {
        header.children[i].style.opacity = fadeAmt;
      }
    });
  };
  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var starty = $scope.$eval($attr.headerShrink) || 0;
      var shrinkAmt;
      var amt;
      var y = 0;
      var prevY = 0;
      var scrollDelay = 0.6;

      var fadeAmt;
      
      var activeHeader = $document[0].body.querySelector('.nav-bar-block[nav-bar="active"] .bar-header');
      var headerHeight = activeHeader.offsetHeight;
      
      function onScroll(e) {
        var scrollTop = e.currentTarget.scrollTop;
        if(scrollTop >= 0) {
          y = Math.min(headerHeight / scrollDelay, Math.max(0, y + scrollTop - prevY));
        } else {
          y = 0;
        }
        ionic.requestAnimationFrame(function() {
          fadeAmt = 1 - (y / headerHeight);
          activeHeader.style[ionic.CSS.TRANSFORM] = 'translate3d(0, ' + -y + 'px, 0)';
          $element[0].style[ionic.CSS.TRANSFORM] = 'translate3d(0, ' + -y + 'px, 0)';
          for(var i = 0, j = activeHeader.children.length; i < j; i++) {
            activeHeader.children[i].style.opacity = fadeAmt;
          }
        });
        prevY = scrollTop;
      }
      $element.bind('scroll', onScroll);
    }
  }
}]);