function AdminController(firebase, $location, $scope, $firebaseArray) {
	var auth = firebase.auth();
	$scope.pTitle=[];
	$scope.pDescription=[];
	$scope.pPrice=[];
	$scope.uTitle=[];
	$scope.uDescription=[];
	$scope.uPrice=[];
	var storageService = firebase.storage();
    var ref = firebase.database().ref().child("product_images");
    var list = $firebaseArray(ref);
    this.images = list;
    this.deleteImg = deleteImg;
    this.editProduct = editProduct;
    this.updateProduct = updateProduct;

    this.image = function(event){
  		event.preventDefault();
    	var file = event.target.files[0];
  		uploadImage(file);
  	};
  	
  	function uploadImage(file) {
      var random = parseInt(Math.random() * 1000000);
      var refStorage = storageService.ref('product_images').child(random.toString()).child(file.name);
      var uploadTask = refStorage.put(file);

		uploadTask.on('state_changed', null, function(error){
			console.log('upload error', error);
		}, function() {
			var imageData = {
				url: uploadTask.snapshot.downloadURL,
				bytes: uploadTask.snapshot.totalBytes,
				name: uploadTask.h.name,
				path: uploadTask.h.fullPath,
				date: uploadTask.h.timeCreated,
				title: $scope.pTitle,
				desc: $scope.pDescription,
				price: $scope.pPrice
			};

			console.log("imageData:",imageData);

			list.$add(imageData).then(function(ref) {
				$scope.pTitle= '';
				$scope.pDescription='';
				file = '';
				swal("Success", "Your image has been upload", "success");
			});
		});
    }


    function editProduct(id){
    	var productInfo = list.$getRecord(id);
    	$scope.productToUpdate= productInfo;

    	$('#editModal').modal(); 
    }

    function updateProduct() {
    	var productId = $scope.productToUpdate.$id;
    	var getData = firebase.database().ref().child("product_images/"+ productId);

    	var newProductInfo = {
    		title: $scope.productToUpdate.title,
	        desc: $scope.productToUpdate.desc,
	        price: $scope.productToUpdate.price
    	};
    	getData.update(newProductInfo).then(function(ref){
    		$('#editModal').modal('hide');
    		swal("Edited!", "Your product information has been updated.", "success");
    	}).catch(function(error) {
          console.log('an error occurred!', error);
        });
    	
    }

    function deleteImg(id) {
      var image = list.$getRecord(id);
          	console.log("image", image);

      swal({
        title: "Are you sure?",
        text: "Do you want to remove this image?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        var imgRef = storageService.ref(image.path);

        imgRef.delete().then(function() {
          list.$remove(image).then(function(ref) {
            swal("Deleted!", "Your image has been deleted.", "success");
          });
        }).catch(function(error) {
          console.log('an error occurred!', error);
        });
      });

    }

	this.signIn =function(email,password){	
 		auth.signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
 			 $location.path( "/adminConsole" ).replace();
 			 $scope.$apply();
		}).catch(function(error) {
  			console.error("Authentication failed:", error);
  			 $location.path( "/admin" );
		});
 	};

// this.uploadImage = function(pTitle, pDescription){

// };
//  	imageFile.addEventListener('change',function(e){
//  		e.preventDefault();
//  		console.log("change!", pTitle, pDescription);
//  		var file = e.target.files[0];
//  		var fName= file.name;
//  		var metadata = {
// 			contentType: 'product_image',
// 			customMetadata: {
// 				'pTitle': pTitle,
// 				'pDescription': pDescription
// 			},
// 		};
		

//  		var blogImageRef = storage.ref('blog_images/'+ fName);
//  			blogImageRef.put(file, metadata).then(function(snapshot){
//  				console.log('Uploaded a file', fName);
//  			});
//  			// getImage(blogImageRef);
//  	});


// function confirmUpload() {
// 	var metadata = {
// 		contentType: 'image',
// 		customMetadata: {
// 			'dogType': 'Lab',
// 			'uploadedBy': user.uid,
// 			'title': $("#imgTitle").val(),
// 			'caption': $("#imgDesc").val()
// 		},
// 	};
// 	var uploadTask = firebase.storage().ref().child('dogImages/' + selectedFile.name).put(selectedFile, metadata);
// 	// Register three observers:
// 	// 1. 'state_changed' observer, called any time the state changes
// 	// 2. Error observer, called on failure
// 	// 3. Completion observer, called on successful completion
// 	uploadTask.on('state_changed', function(snapshot){
//   		// Observe state change events such as progress, pause, and resume
//   		// See below for more detail
// 	}, function(error) {
//   		// Handle unsuccessful uploads
// 	}, function() {
//   		// Handle successful uploads on complete
//   		// For instance, get the download URL: https://firebasestorage.googleapis.com/...
//   		$(".upload-group")[0].before("Success!");
//   		$(".upload-group").hide();

// 	});

// }
 	
// function getImage(blogImageRef){

//  		blogImageRef.getDownloadURL().then(function(url) {
//  			$scope.images = url;
// 				  // Get the download URL for 'images/stars.jpg'
// 				  // This can be inserted into an <img> tag
// 				  // This can also be downloaded directly
// 				  console.log("url:",url);
// 				  console.log('scope.images:',$scope.images);
// 				}).catch(function(error) {
// 				   switch (error.code) {
// 					    case 'storage/object_not_found':
// 					      // File doesn't exist
// 					      break;

// 					    case 'storage/unauthorized':
// 					      // User doesn't have permission to access the object
// 					      break;

// 					    case 'storage/canceled':
// 					      // User canceled the upload
// 					      break;

// 					    case 'storage/unknown':
// 					      // Unknown error occurred, inspect the server response
// 					      break;
// 					  }
// 				});
// }
 	

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





 	// var trigger = document.getElementById('hamburger'),
 	// 	overlay = document.getElementById('overlay'),
 	// 	navBar = document.getElementById('sidebar-wrapper'),
 	// 	isClosed = false;

  //   trigger.click(function () {
  //     hamburger_cross();      
  //   });

  //   function hamburger_cross() {

  //     if (isClosed === true) {          
  //       overlay.hide();
  //       trigger.removeClass('is-open');
  //       trigger.addClass('is-closed');
  //       isClosed = false;
  //     } else {   
  //       overlay.show();
  //       trigger.removeClass('is-closed');
  //       trigger.addClass('is-open');
  //       isClosed = true;
  //     }
  // }
  
  // $('[data-toggle="offcanvas"]').click(function () {
  //       $('#wrapper').toggleClass('toggled');
  //       $('#sidebar-wrapper').toggleClass('hide');
  // });  

}

AdminController.$inject = ['firebase','$location','$scope', '$firebaseArray'];

angular
	.module('app')
	.controller('AdminController', AdminController);


