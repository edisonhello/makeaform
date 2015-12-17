'use strict'

var path = require('path');
var express = require('express');

var app=express();

app.use(express.static('static'));

app.post('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'),function(){
        res.end();});});



app.listen(3000);
