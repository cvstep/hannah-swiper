/**
 * @ngdoc object
 * @name databaseconfig
 * @description
 * This module loads the application configuration depending on the
 * 'NODE_ENV' environment variable.
 *
 * @property {String} env - The environment used in the application
 * @property {String} root - The application root path
 * @property {String} publicDir - The path to public sources
 * @property {String} ip - IP address used to bind the application server
 * @property {String} port - The port used to bind the application server
 * @property {Object} secrets - Holding the session secret used to sign the user session
 * @property {Array} userRoles - Array of available user role names
 * @property {Object} mongo - Configuration that is passed to mongoose to establish a connection
 */

'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
const config =  require('./index');

mongoose.connect(config.dbConnString, { useNewUrlParser: true } );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('test')
});


module.exports = {};
