var express  = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.get("/",function(req,res){
    res.send("你暴露了");
    console.log(req.url);
});

app.listen(3001);