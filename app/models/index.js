var mongoose = require('mongoose');
mongoose.set('debug', false);
mongoose.connect('mongodb://localhost/subreddit-post-map');

mongoose.Promise = Promise;

module.exports.Post = require("./post.js");