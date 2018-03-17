var express = require("express"),
    router = express.Router(),
    axios = require("axios");

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

  sayHello: function(){
    return "Hello";
  }

}
