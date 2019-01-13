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
var fs = require('fs');
var pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
const exegesisExpress = require('exegesis-express');

module.exports = initExpress;

  /**
   * Configure the express application by adding middleware and setting application
   * variables.
   * @param {express.app} app - The express application instance to configure
   */
 async function initExpress(app) {

  var env = app.get('env');
	//var publicDir = path.join(config.root, config.publicDir);
	//app.set('ip', config.ip);
	app.set('port', config.port);

  app.use(compression());

	//app.use(methodOverride());
  app.use(cookieParser());

  app.use(bodyParser.urlencoded({ extended: false  }));
  app.use(bodyParser.json());

  var ars = expressOpenApi.initialize({
    app: app,
    apiDoc: fs.readFileSync(path.resolve(__dirname, './openapi.yaml'), 'utf8'),
    paths: './api/v1/handlers',
    docsPath: '/api-docs',
    securityHandlers: {
      apiKeyAuth: require(path.resolve(__dirname, '../api/v1/security/apiKeyAuth')),
      booAuth: function(req, scopes, definition) {
        console.log(scopes)
        req.boo = 'boo';
        return false;
      },
    },
    securityDefinitions: {
    booAuth: {
      type: 'apiKey',
      name: 'booAuth',
      in: 'header'
    }}
  })
  app.use(express.static('assets/swagger-ui-dist'), function(req, res, next){
    next()
  })



  app.get('/', function(req, res) {
   res.redirect('/openapi');
  });
  app.use(function(err, req, res, next) {
    if (err.challenge) {
      res.set('www-authenticate', err.challenge);
    }
    res.status(err.status || 500);

    if (typeof err.message === 'string') {
      res.send(err.message);
    } else {
      res.json(err.message);
    }
  });
  app.use(passport.initialize());
  app.use(passport.session());
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

