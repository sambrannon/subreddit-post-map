var express	= require("express"),
	router 	= express.Router(),

	reddit	= require("../../helpers/reddit.js");


var redditUrl = "https://www.reddit.com/r/tattoos/new/.json";




router.get("/", function(req, res){
	reddit.getSubPosts(redditUrl)
	.then(reddit.getPostsWithStateInTitle)
	.then(function(posts){
		return res.send(posts);
	})
});




module.exports = router;
