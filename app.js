'use strict'

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/add.html',function(req,res){
    res.sendFile(__dirname+'/form.html',function(){res.end();})
});
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html',function(){res.end();})
});

app.post('/',function(req,res){
    res.send(req.body);
    res.end();  
});



app.listen(3000);
