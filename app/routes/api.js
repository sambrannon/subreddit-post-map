var express = require("express"),
    router = express.Router(),
    db = require("../models");


router.get("/", function(req, res){
	db.Post.find({})
	.then(function(posts){
		res.json(posts);
	})
	.catch(function(err){
		res.send(err);
	})
});

router.get("/:post_id", function(req, res){
	db.Post.findById(req.params.post_id)
	.then(function(post){
		res.json(post);
	})
	.catch(function(err){
		res.send(err);
	})
})

module.exports = router;
