var express	= require("express"),
	router 	= express.Router(),
	reddit	= require("../../helpers/reddit.js"),
	city	= require("../../helpers/city.js");


var redditUrl = "https://www.reddit.com/r/tattoos/new/.json?limit=25";




router.get("/", function(req, res){
	reddit.getSubPosts(redditUrl)
	.then(reddit.getPostsWithStateInTitle)
	.then(function(posts){
		return res.send(posts);
	}).catch(function(err){
		console.log(err);
	})
});




module.exports = router;
