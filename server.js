var express		= require("express"),
	app			= express(),
	indexRoutes	= require("./app/routes");

app.use(indexRoutes);

app.listen(process.env.PORT || 3000, function(){
    console.log("server is running");
});	