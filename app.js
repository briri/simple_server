'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var router = require('./router.js');
var server = express();

server.use(bodyParser.urlencoded({extended: true}));

server.use(express.static('./public'));

server.get('/', function(req, res){
	res.status(200).send("You found it!");
});

server.on('close', function(){
	LOG.info(CONFIG['server']['name'] + " no longer listening on port " + CONFIG['server']['port']);
})

server.on('error', function(err){
	LOG.error(CONFIG['server']['name'] + " has encountered an error: ", err);
});

// Startup the web server	
server.listen(CONFIG['server']['port'], function(){
	LOG.info(CONFIG['server']['name'] + " listening on port " + CONFIG['server']['port']);
});