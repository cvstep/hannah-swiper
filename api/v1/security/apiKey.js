'use strict';
/**
 * Authorize function for securityDefinitions:logonTicket
 * type : apiKey
 * description:
 */
var passport = require('passport');
var LocalAPIKeyStrategy = require('passport-localapikey').Strategy;

var users = [
    { id: 1, username: 'testUser', password: 'secret', email: 'bob@example.com', apikey: 'c35a13468062a440d210e9c6e9daaa8f000152cb' }
];

function findById(id, fn) {
  var idx = id - 1;
  if (users[idx]) {
    fn(null, users[idx]);
  } else {
    fn(new Error('User ' + id + ' does not exist'));
  }
}

function findByUsername(username, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(new Error('Username ' + username + ' does not exist'), null);
}


function findByApiKey(apikey, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    console.log(user.apikey, apikey)
    if (user.apikey === apikey) {
      return fn(null, user);
    }
  }
  console.log(user.apikey, apikey)
  return fn(new Error('apiKey ' + apikey + ' does not exist'), null);
}



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  findById(id, function (err, user) {
    done(err, user);
  });
});
passport.use(new LocalAPIKeyStrategy(
  {apiKeyField: "apiKey"},
  function(apikey, done) {
    findByApiKey(apikey, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user);
    });
  }
));
var authorize = passport.authenticate('localapikey', { session: false });
module.exports = authorize;



