
function navScroll(){

	function link($scope,$element,$attrs,$ctrl){
			function locateSpecificElement(){
			
				var navMenuLogo = document.getElementById('navMenu_logo');
				var navMenuLogoTopPosition = navMenuLogo.getBoundingClientRect().top;
				var getnavMenuLogo = angular.element(document.querySelector('#navMenu_logo'));
				var navMenuCategories = document.getElementById('navMenu_categories');
				var navMenuCategoriesTopPosition = navMenuCategories.getBoundingClientRect().top;
				// console.log("navMenuLogo",navMenuLogo);
				// console.log("navMenuCategories",navMenuCategories);
				// console.log("navMenuLogoTopPosition",navMenuLogoTopPosition);
				// console.log("navMenuCategoriesTopPosition",navMenuCategoriesTopPosition);
				// console.log("getnavMenuLogo",getnavMenuLogo);

				var logo = document.getElementById('logo');
				var logoTopPosition = logo.getBoundingClientRect().top;
				var getLogo = angular.element(document.querySelector('#logo'));
				

				if(this.scrollY >= 600 && this.innerWidth > 480){
					getnavMenuLogo.addClass('is-fixed');
					setTimeout(function(){
						getnavMenuLogo.addClass('animate-children');
						logo.addClass('slide-in');
					},50);
				} else {
					getnavMenuLogo.removeClass('is-fixed');
					setTimeout(function(){
						getnavMenuLogo.removeClass('animate-children');
						// logo.removeClass('slide-in');
					},50);
				}
			 	$scope.$apply();
			}
		

		angular.element(window).bind('scroll', locateSpecificElement);
	}
	return{
		restrict: 'A',
		scope: {},
		link: link
	};
}
angular
	.module('app')
	.directive("navScroll",navScroll);