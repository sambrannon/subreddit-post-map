var express		= require("express"),
	router		= express.Router(),

	axios		= require("axios");


var states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];	


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
				return states.includes(str);
			});
		});
	}		

}









