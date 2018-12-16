'use strict';
var fs = require('fs');

process.env.DATABASE_NAME = process.env.DATABASE_NAME || 'dev';
process.env.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
process.env.DATABASE_PORT = process.env.DATABASE_PORT || 27017;
process.env.DATABASE_CONN_STRING = process.env.DATABASE_CONN_STRING || "".concat("mongodb//", process.env.DATABASE_HOST, ":", process.env.DATABASE_PORT, "/", process.env.DATABASE_NAME);
// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
module.exports = {
  https: {
   // key: fs.readFileSync('.ssl/server.key'),
   // cert: fs.readFileSync('.ssl/server.crt'),
    requestCert: false,
    rejectUnauthorized: false
  },
  dbConnString: process.env.DATABASE_CONN_STRING,
  port: process.env.PORT || 3000,

};
