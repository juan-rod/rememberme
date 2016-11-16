
function mainBody() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/MainBody.html",
		controller: 'MainBodyController'

	};
}

angular
	.module('app')
	.directive('mainBody', mainBody);