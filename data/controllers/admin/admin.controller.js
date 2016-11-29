function AdminController(firebase, $location) {
	var auth = firebase.auth();

	this.signIn =function(email,password){
		console.log("in signIn", email, password);
 		
 		auth.signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
 			 $location.path( "/adminConsole" );
 			 console.log("$location:",$location);
  			console.log("Signed in as:", firebaseUser.uid);
		}).catch(function(error) {
  			console.error("Authentication failed:", error);
  			 $location.path( "/admin" );
		});

 	};

	this.postIt = function(title,blogPost){
		var postData = {
			title: title,
			date: todaysDate(),
			post: blogPost
		};
		console.log("postData:",postData);
		var newPostKey = firebase.database().ref().child('blog').push().key;
		var updates = {};
		postData.id = newPostKey;
	  	updates['/blog-posts/' + newPostKey] = postData;
	  	
	  	this.blogPost = '';
	  	this.title = '';
	  	return firebase.database().ref().update(updates);

	};

	function todaysDate(){
		var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
		var d = new Date(),
			date = d.getDate(),
			year = d.getFullYear(),
			month = d.getMonth(),
			newMonth= monthNames[month];
		var today =  newMonth + ' ' + date + ', ' + year;

		return today;
	}
}

AdminController.$inject = ['firebase','$location'];

angular
	.module('app')
	.controller('AdminController', AdminController);


