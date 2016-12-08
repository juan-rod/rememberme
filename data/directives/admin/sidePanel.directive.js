
function sidePanel() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/admin/content/admin.sidePanel.html"

	};
}

angular
	.module('app')
	.directive('sidePanel', sidePanel);