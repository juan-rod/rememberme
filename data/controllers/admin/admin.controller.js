function AdminController(firebase, $location, $scope) {
	var auth = firebase.auth();
 	var imageFile = document.getElementById('imageFile');
 	var storage = firebase.storage();
 	$scope.images=[];

	this.signIn =function(email,password){	
 		auth.signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
 			 $location.path( "/adminConsole" ).replace();
 			 $scope.$apply();
		}).catch(function(error) {
  			console.error("Authentication failed:", error);
  			 $location.path( "/admin" );
		});
 	};

 	imageFile.addEventListener('change',function(e){
 		var file = e.target.files[0];
 		var fName= file.name;

 		var blogImageRef = storage.ref('blog_images/'+ fName);
 			blogImageRef.put(file).then(function(snapshot){
 				console.log('Uploaded a file', fName);
 			});
 			getImage(blogImageRef);
 	});
 	
function getImage(blogImageRef){

 		blogImageRef.getDownloadURL().then(function(url) {
 			$scope.images = url;
				  // Get the download URL for 'images/stars.jpg'
				  // This can be inserted into an <img> tag
				  // This can also be downloaded directly
				  console.log("url:",url);
				  console.log('scope.images:',$scope.images);
				}).catch(function(error) {
				   switch (error.code) {
					    case 'storage/object_not_found':
					      // File doesn't exist
					      break;

					    case 'storage/unauthorized':
					      // User doesn't have permission to access the object
					      break;

					    case 'storage/canceled':
					      // User canceled the upload
					      break;

					    case 'storage/unknown':
					      // Unknown error occurred, inspect the server response
					      break;
					  }
				});
}
 	

	this.postIt = function(title,blogPost,image){
		console.log("image:", image);
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





 	var trigger = document.getElementById('hamburger'),
 		overlay = document.getElementById('overlay'),
 		navBar = document.getElementById('sidebar-wrapper'),
 		isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed === true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
        $('#sidebar-wrapper').toggleClass('hide');
  });  

}

AdminController.$inject = ['firebase','$location','$scope'];

angular
	.module('app')
	.controller('AdminController', AdminController);


