function BlogController($scope,firebase, $timeout, $firebaseObject, $firebaseArray){
	$scope.blog=[];

	var ref = firebase.database().ref().child("blog-posts");

 
  	$scope.blog = $firebaseArray(ref);
	
	
			    
		
	// }
	// function blogData(){ 
	// 	console.log("hello from blogData function");

	// 	var query = firebase.database().ref("/blog-posts/").orderByKey();
	// 		query.once("value").then(function(snapshot) {
	// 			$scope.blog = [];
	// 		    snapshot.forEach(function(childSnapshot) {
	// 		     	var dataFromBlog = childSnapshot.val();
	// 		     	 $scope.blog.push(dataFromBlog);
	// 		  	});
	// 		    console.log("$scope.blog:",$scope.blog);
	// 		  	 return $scope.blog;	
	// 		});
	// }
	// this.blog =[
	// {
	// 	title: 'First Post',
	// 	date: "November 29, 2016",
	// 	post: "Pork belly succulents polaroid helvetica, paleo street art bicycle rights mixtape iceland tousled. Listicle four dollar toast chillwave drinking vinegar kale chips. Semiotics art party small batch selfies, succulents microdosing vexillologist. Meh aesthetic brunch williamsburg. Raw denim pour-over knausgaard, tumblr shabby chic disrupt letterpress fashion axe XOXO distillery tacos enamel pin coloring book. Kombucha +1 lomo, enamel pin scenester gluten-free cred brunch deep v. Polaroid tbh try-hard drinking vinegar."
	// },
	// {
	// 	title: 'Second Post',
	// 	date: "November 29, 2016",
	// 	post: "Pork belly succulents polaroid helvetica, paleo street art bicycle rights mixtape iceland tousled. Listicle four dollar toast chillwave drinking vinegar kale chips. Semiotics art party small batch selfies, succulents microdosing vexillologist. Meh aesthetic brunch williamsburg. Raw denim pour-over knausgaard, tumblr shabby chic disrupt letterpress fashion axe XOXO distillery tacos enamel pin coloring book. Kombucha +1 lomo, enamel pin scenester gluten-free cred brunch deep v. Polaroid tbh try-hard drinking vinegar."
	// },
	// {
	// 	title: 'Third Post',
	// 	date: "November 29, 2016",
	// 	post: "Pork belly succulents polaroid helvetica, paleo street art bicycle rights mixtape iceland tousled. Listicle four dollar toast chillwave drinking vinegar kale chips. Semiotics art party small batch selfies, succulents microdosing vexillologist. Meh aesthetic brunch williamsburg. Raw denim pour-over knausgaard, tumblr shabby chic disrupt letterpress fashion axe XOXO distillery tacos enamel pin coloring book. Kombucha +1 lomo, enamel pin scenester gluten-free cred brunch deep v. Polaroid tbh try-hard drinking vinegar."
	// },
	// {
	// 	title: 'Fourth Post',
	// 	date: "November 29, 2016",
	// 	post: "Pork belly succulents polaroid helvetica, paleo street art bicycle rights mixtape iceland tousled. Listicle four dollar toast chillwave drinking vinegar kale chips. Semiotics art party small batch selfies, succulents microdosing vexillologist. Meh aesthetic brunch williamsburg. Raw denim pour-over knausgaard, tumblr shabby chic disrupt letterpress fashion axe XOXO distillery tacos enamel pin coloring book. Kombucha +1 lomo, enamel pin scenester gluten-free cred brunch deep v. Polaroid tbh try-hard drinking vinegar."
	// }
	// ];
// blogData();
}
BlogController.$inject=['$scope','firebase', '$timeout', "$firebaseObject","$firebaseArray"];
angular
	.module('app')
	.controller('BlogController', BlogController);