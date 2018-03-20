	var axios		= require("axios"),
	    city		= require("./city.js"),
      cities  = require("cities");


var helpers = {

	getSubPosts: function(subUrl, limit, before, after){
		return axios.get(subUrl, {params: {
      limit: 100
    }})
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

  findPostsWithCities: function(posts){
    var statesAbb = city.getStates(true),
        states = city.getStates();
    return posts.filter(function(post){
      var title = post.data.title,
          titleArr = title.replace(/[.,?!_"';:-]/g, "").split(" ");
      return titleArr.some(function(state, i, arr){
        if(statesAbb.includes(state) || states.includes(state.toUpperCase())){
          var foundCities = cities.findByState(state);
          return foundCities.some(function(city){
            if(helpers.foundCityInTitle(city, arr, i)){ 
              //database function will most likely go here 
              post.data.state = city.state;
              post.data.city = city.city;
              return true;
            }
          })
        }
      });
    });
  },


  foundCityInTitle: function(city, titleArr, stateIndex){
    var cityUpper = city.city.toUpperCase(),
        oneBefore = titleArr[stateIndex - 1].toUpperCase(),
        twoBefore = titleArr[stateIndex - 2].toUpperCase(),
        threeBefore = titleArr[stateIndex - 3].toUpperCase();


    if(cityUpper === oneBefore){
      return true;
    }
    else if(cityUpper === twoBefore + " " + oneBefore) {
      return true;
    }
    else if(cityUpper === threeBefore + " " + twoBefore + " " + oneBefore) {
      return true;
    }
    else {
      return false;
    }
  }



}


module.exports = helpers;








