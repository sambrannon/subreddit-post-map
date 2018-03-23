	var axios		= require("axios"),
	    cityHelp		= require("./city.js"),
      cities  = require("cities");


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
                console.log(post.data.title);
                console.log(post.data.city);
                num++
                console.log(num);
              }
            }
          })
          return null;
  },

  returnState: function(title){
    const statesAbbr = cityHelp.getStates(true),
          states = cityHelp.getStates();
    for(let i=0, len=statesAbbr.length;i<len;i++){
      if(title.includes(statesAbbr[i]) || title.toUpperCase().includes(states[i])){
        return {nameAbbr: statesAbbr[i], name: states[i], index: title.indexOf(statesAbbr[i])};
      }
    }      

  },

  returnCity: function(title, state){
    stateCities = cities.findByState(state.nameAbbr);
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








