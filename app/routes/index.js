var express = require("express"),
    router = express.Router(),
    reddit = require("../../helpers/reddit.js"),
    city	= require("../../helpers/city.js");

router.get("/", function(req, res){
  var redditUrl = "https://www.reddit.com/r/tattoos/new/.json";


  reddit.getSubPosts(redditUrl)
  .then(reddit.findPostsWithCities)
  .then(function(){
    res.render('index', {title: 'Reddit Map Thinger'});
  })
  .catch(function(err){
  	console.log(err);
  })
});


module.exports = router;
