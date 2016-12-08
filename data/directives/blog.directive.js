
function blogPost() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/blog.html",
		controller: 'BlogController'

	};
}

angular
	.module('app')
	.directive('blogPost', blogPost);