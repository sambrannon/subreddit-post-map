var express = require("express"),
    app = express(),
    indexRoutes = require("./app/routes");

    
app.use(indexRoutes);
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function(){
  console.log("server is running");
});
