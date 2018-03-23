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
    console.log("hello");
      var num = 0;
          posts.forEach(function(post){
            let title = post.data.title.replace(/[.,?!_"';:-]/g, "").split(" ");
            let state;
            state = help.returnState(title);
            if(state && state.index !== -1){
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
    const statesAbb = cityHelp.getStates(true),
          states = cityHelp.getStates();
    for(let i=0, len=statesAbb.length;i<len;i++){
      if(title.includes(statesAbb[i]) || title.map(val => val.toUpperCase()).includes(states[i])){
        return {nameAbb: statesAbb[i], name: states[i], index: title.indexOf(statesAbb[i])};
      }
    }      

  },

  returnCity: function(title, state){
    stateCities = cities.findByState(state.nameAbb);
    const titleSearchArea = title.slice(state.index - 4, state.index);
    for(let i=0, len=stateCities.length;i<len;i++){
      if(titleSearchArea.includes(stateCities[i].city.toUpperCase())){
        return stateCities[i];
      }
    } 
  }


}

module.exports = help;








