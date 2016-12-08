
function postBlog() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/admin/content/admin.postBlog.html"

	};
}

angular
	.module('app')
	.directive('postBlog', postBlog);