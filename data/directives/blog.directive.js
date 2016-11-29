
function blog() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/blog.html",
		controller: 'BlogController'

	};
}

angular
	.module('app')
	.directive('blog', blog);