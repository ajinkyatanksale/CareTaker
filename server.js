'use strict';
require("app-module-path").addPath(__dirname);
const Hapi=require("hapi");
// var Ejs = require('ejs');
// const Handlebars = require('handlebars')
//const mongoose = require("mongoose");

const server =new Hapi.server({
	port: 8081,
	host: 'localhost'
});
  

server.start(function(){
	console.log('Server is starting...');
});

const Routes  = require('./Routes');
Routes(server);


