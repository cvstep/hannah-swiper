'use strict';
var fs = require('fs');


process.env.DATABASE_NAME = process.env.DATABASE_NAME || 'stag';
process.env.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
process.env.DATABASE_PORT = process.env.DATABASE_PORT || 27017;
process.env.DATABASE_CONN_STRING = process.env.DATABASE_CONN_STRING || "".concat("mongodb//", process.env.DATABASE_HOST, ":", process.env.DATABASE_PORT, "/", process.env.DATABASE_NAME);

module.exports = {
  https: {
   // key: fs.readFileSync('.ssl/server.key'),
   // cert: fs.readFileSync('.ssl/server.crt'),
    requestCert: false,
    rejectUnauthorized: false
  },
  port: process.env.PORT || 3000,
  dbConnString: process.env.DATABASE_CONN_STRING,
};
