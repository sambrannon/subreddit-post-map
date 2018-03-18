var express = require("express"),
    router = express.Router(),
    reddit = require("../../helpers/reddit.js");

router.get("/", function(req, res){
  var redditUrl = "https://www.reddit.com/r/tattoos/new/.json";

  reddit.getSubPosts(redditUrl)
  .then(function(posts){
    // res.send(posts);

    res.render('index', {title: 'Reddit Map Thinger'});
  });
});

module.exports = router;
