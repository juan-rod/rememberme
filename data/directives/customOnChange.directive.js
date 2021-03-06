
function customOnChange() {
	 return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var onChangeHandler = scope.$eval(attrs.customOnChange);
        element.bind('change', onChangeHandler);
      }
    };
}

angular
	.module('app')
	.directive('customOnChange', customOnChange);