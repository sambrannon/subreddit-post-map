const getAllPosts = function(){
	return axios.get("/api/posts/")
	.then(function(posts){
		// console.log(posts.data);
		return posts.data;
	})
	.catch(function(err){
		return console.log(err);
	})
}

const getAllCoordinates = function(){
	return getAllPosts()
	.then(function(posts){
		return posts.reduce(function(acc, next){
			let latitude = Number(next.city.latitude);
			let longitude = Number(next.city.longitude)
			acc.push({lat: latitude, lng: longitude});
			return acc;
		}, []);
	})
}