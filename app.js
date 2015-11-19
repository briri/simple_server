'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(bodyParser.urlencoded({extended: true}));

server.use(express.static('./public'));

server.get('/', function(req, res){
	res.status(200).send("You found it!");
});

server.on('error', function(err){
	LOG.error("Simple Server has encountered an error: ", err);
});

server.on('error', function(err){
	LOG.error("Simple Server has encountered an error: ", err);
});

// Startup the web server	
server.listen(18880, function(){
	LOG.error("Simple Server is listening.");	
});