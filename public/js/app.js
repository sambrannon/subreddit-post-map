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


