const mongoose = require("mongoose"),
	  db = require("../app/models");


const help = {
	addPostToDb: function(post){
		const newPost = {
			redditId: post.id,
			subreddit: post.subreddit,
			author: post.author,
			image: {
				source: post.preview.images[0].source,
				small: post.preview.images[0].resolutions[0],
				medium: post.preview.images[0].resolutions[3],
				large: post.preview.images[0].resolutions[5],
			},
			title: post.title,
			created_utc: post.created_utc,
			city: post.city,
			body: post.selftext
		}
		db.Post.create(newPost)
		.then(function(post){
			console.log(post);
		})
		.catch(function(err){
			if(err.code !== 11000){
				console.log(err);
			}
		})
	}
}


module.exports = help;