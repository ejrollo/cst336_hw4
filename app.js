const fakeData = require("faker");

const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/tools", function(req, res){
    res.render("tools.html");
});

app.get("/programming", function(req, res){
    res.render("programming.html");
});

app.get("/components", function(req, res){
    res.render("components.html");
});


//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});