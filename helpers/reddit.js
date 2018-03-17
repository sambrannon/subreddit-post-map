var express		= require("express"),
	router		= express.Router(),
	axios		= require("axios"),
	city		= require("./city.js");


var states = 


module.exports = {

	getSubPosts: function(subUrl, limit, before, after){
		return axios.get(subUrl)
		.then(function(res){
			return res.data.data.children;
		})
		.then(function(posts){
			return posts;
		})
		.catch(function(err){
			return console.log(err);
		});
	},

	getPostsWithStateInTitle: function(posts){
		return posts.filter(function(post){
			return post.data.title		
			.replace(/[.,?!_"';:-]/g, "")
			.split(" ")
			.some(function(str){
				return city.getStates(true).includes(str) || city.getStates().includes(str.toUpperCase());
			});
		});
	}		

}









