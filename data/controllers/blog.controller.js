function BlogController(firebase){
	

	function blogData(){ 
		var query = firebase.database().ref("/blog-posts/").orderByKey();
			query.once("value").then(function(snapshot) {
				this.blog = [];
			    snapshot.forEach(function(childSnapshot) {
			     	var dataFromBlog = childSnapshot.val();
			     	 this.blog.push(dataFromBlog);
			  	});
			  	return this.blog;	
			});
	}
	this.blog =[{
		title: 'First Post',
		date: "November 29, 2016",
		post: "Pork belly succulents polaroid helvetica, paleo street art bicycle rights mixtape iceland tousled. Listicle four dollar toast chillwave drinking vinegar kale chips. Semiotics art party small batch selfies, succulents microdosing vexillologist. Meh aesthetic brunch williamsburg. Raw denim pour-over knausgaard, tumblr shabby chic disrupt letterpress fashion axe XOXO distillery tacos enamel pin coloring book. Kombucha +1 lomo, enamel pin scenester gluten-free cred brunch deep v. Polaroid tbh try-hard drinking vinegar."
	},
	{
		title: 'Second Post',
		date: "November 29, 2016",
		post: "Pork belly succulents polaroid helvetica, paleo street art bicycle rights mixtape iceland tousled. Listicle four dollar toast chillwave drinking vinegar kale chips. Semiotics art party small batch selfies, succulents microdosing vexillologist. Meh aesthetic brunch williamsburg. Raw denim pour-over knausgaard, tumblr shabby chic disrupt letterpress fashion axe XOXO distillery tacos enamel pin coloring book. Kombucha +1 lomo, enamel pin scenester gluten-free cred brunch deep v. Polaroid tbh try-hard drinking vinegar."
	},{
		title: 'Third Post',
		date: "November 29, 2016",
		post: "Pork belly succulents polaroid helvetica, paleo street art bicycle rights mixtape iceland tousled. Listicle four dollar toast chillwave drinking vinegar kale chips. Semiotics art party small batch selfies, succulents microdosing vexillologist. Meh aesthetic brunch williamsburg. Raw denim pour-over knausgaard, tumblr shabby chic disrupt letterpress fashion axe XOXO distillery tacos enamel pin coloring book. Kombucha +1 lomo, enamel pin scenester gluten-free cred brunch deep v. Polaroid tbh try-hard drinking vinegar."
	},{
		title: 'Fourth Post',
		date: "November 29, 2016",
		post: "Pork belly succulents polaroid helvetica, paleo street art bicycle rights mixtape iceland tousled. Listicle four dollar toast chillwave drinking vinegar kale chips. Semiotics art party small batch selfies, succulents microdosing vexillologist. Meh aesthetic brunch williamsburg. Raw denim pour-over knausgaard, tumblr shabby chic disrupt letterpress fashion axe XOXO distillery tacos enamel pin coloring book. Kombucha +1 lomo, enamel pin scenester gluten-free cred brunch deep v. Polaroid tbh try-hard drinking vinegar."
	}];
blogData();
}
BlogController.$inject=['firebase'];
angular
	.module('app')
	.controller('BlogController', BlogController);