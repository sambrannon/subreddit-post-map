const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	redditId: {
		type: String,
		unique: true
	},
	subreddit: String,
	author: String,
	image: {
		source: Object,
		small: Object,
		medium: Object,
		large: Object
	},
	created_utc: Number,
	last_requested: {
		type: Date,
		default: Date.now()
	},
	title: String,
	city: Object
});


const Post = mongoose.model("Post", postSchema);

module.exports = Post;
