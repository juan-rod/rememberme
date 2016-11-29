
function collectionPreview() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/collectionpreview.html",
		controller: 'CollectionPreviewController'

	};
}

angular
	.module('app')
	.directive('collectionPreview', collectionPreview);