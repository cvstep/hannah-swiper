'use strict';

var express = require('express');
var path = require('path');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var config =  require('./index');
var passport = require('passport');
var expressOpenApi = require('express-openapi');
var fs = require('fs')
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

module.exports = initExpress;

/**
 * Configure the express application by adding middleware and setting application
 * variables.
 * @param {express.app} app - The express application instance to configure
 */
function initExpress(app) {
	var env = app.get('env');
	//var publicDir = path.join(config.root, config.publicDir);
	//app.set('ip', config.ip);
	app.set('port', config.port);

  app.use(compression());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser());


	app.use(passport.initialize());
  app.use(passport.session());
  expressOpenApi.initialize({
    app: app,
    apiDoc: fs.readFileSync(path.resolve(__dirname, './openapi.yaml'), 'utf8'),
    paths: './api/v1/handlers',
    docsPath: '/api-docs',
    securityHandlers: {
      apiKeyAuth: function(req, scopes, definition) {
        /* do something.  You can assign values to req to make them available in
        operation handlers. */
        console.log(true)
        return Promise.resolve(true);
      },
      basicAuth: function(req, scopes, definition) {
        /* do something */
        throw {
          status: 401,
          challenge: 'Basic realm=foo',
          message: 'You must authenticate to access foo.'
        };
      }
    }
  });

  app.use(express.static('assets/swagger-ui-dist'), function(req, res, next){
    next()  })
  app.get('/', function(req, res) {
   res.redirect('/openapi');
  });
  if ('development' === env || 'staging' === env) {
    console.log('In development Mode')
    app.use(morgan('combined'));
    // Error handler - has to be last
    app.use(errorHandler());
  }
  if ('production' === env) {
    app.use(morgan('tiny'));
  }
}
