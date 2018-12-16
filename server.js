'use strict';
var express = require('express');
var config = require('./config/index');

var app = express();
exports = module.exports = app;
require('./config/express')(app);

var http = require('http');
var server = http.createServer(app);
server.listen(config.port, function () {
  /*eslint no-unused-vars: 1*/
   console.log(require('util').inspect(server.address(), {depth:5}))

});
function serverShutdown() {
  server.close(function () {
    /*eslint no-process-exit: 1*/
    process.exit(0);
  });
}

process
  .on('SIGINT', serverShutdown)
  .on('SIGTERM', serverShutdown);



