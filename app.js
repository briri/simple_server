'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(bodyParser.urlencoded({extended: true}));

server.use(express.static('./public'));

server.get('/', function(req, res){
	res.status(200).send("You found it!");
});

server.on('close', function(){
	console.log("Simple Server is not longer listening");
});

server.on('error', function(err){
	console.log("Simple Server has encountered an error: " + err);
});

// Startup the web server	
server.listen(18880, function(){
	console.log("Simple Server is listening.");	
});