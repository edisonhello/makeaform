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
	if(req.body.pass!=req.body.pass2){
		res.sendFile(__dirname+'form_pass.html',function(){res.end()})
		if(req.body.birth==""){
   			res.sendFile(__dirname+'form_birth.html',function(){res.end()})
   	   }else{
   		res.sendFile(__dirname+'done.html',function(){res.end()})
       }
    }
    else{
    	res.sendFile(__dirname+'done.html',function(){res.end()}) 
    }

app.get('/list',function(req,res){
//    res.sendFile(__dirname+'/list.html',function(){res.end();})
});

app.listen(3000);
