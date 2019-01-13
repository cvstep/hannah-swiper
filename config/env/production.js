'use strict';
var fs = require('fs');

process.env.DATABASE_NAME = process.env.DATABASE_NAME || 'prod';
process.env.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
process.env.DATABASE_PORT = process.env.DATABASE_PORT || 27017;
process.env.DATABASE_CONN_STRING = process.env.DATABASE_CONN_STRING || "".concat("mongodb://", process.env.DATABASE_HOST, ":", process.env.DATABASE_PORT, "/", process.env.DATABASE_NAME);

module.exports = {
	ip: process.env.ip || undefined,
	port: process.env.PORT || 3000,
  dbConnString: process.env.DATABASE_CONN_STRING,
};
