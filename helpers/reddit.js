var express		= require("express"),
	router		= express.Router(),
	axios		= require("axios"),
	city		= require("./city.js");





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

  findStateInTitle: function(title){
    return title   
    .replace(/[.,?!_"';:-]/g, "")
    .split(" ")
    .forEach(function(str){
      if(city.getStates(true).includes(str) || city.getStates().includes(str.toUpperCase())){
        return str;
      }
    });
  },

	getPostsWithStateInTitle: function(posts){
		return posts.filter(function(post){
      console.log(this);
      return module.exports.findStateInTitle(post.data.title);		
		});
	}	

}











