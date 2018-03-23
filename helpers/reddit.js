	var axios		    = require("axios"),
	    cityHelp		= require("./city.js"),
      cities      = require("cities"),
      dbHelp      = require("./mongoose.js");


var help = {

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
      var num = 0;
          posts.forEach(function(post){
            let title = post.data.title;
            let state = help.returnState(title);
            if(state){
              post.data.city = help.returnCity(title, state);
              if(post.data.city){
                dbHelp.addPostToDb(post.data);
              }
            }
          })
          return null;
  },

  returnState: function(title){
    const states = cityHelp.states;
    for(let i=0, len=states.length;i<len;i++){
      if(title.includes(states[i].abbreviation) || title.toUpperCase().includes(states[i].name)){
        return states[i];
      }
    }      

  },

  returnCity: function(title, state){
    stateCities = cities.findByState(state.abbreviation);
    const titleUpper = title.toUpperCase();
    for(let i=0, len=stateCities.length;i<len;i++){
      if(titleUpper.includes(stateCities[i].city.toUpperCase()) && stateCities[i].city !== ""){
        return stateCities[i];
      }
    } 
  }

//can currently validate 59/100 posts 


}

module.exports = help;








