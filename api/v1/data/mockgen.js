'use strict';
var Path = require('path');
var Swagmock = require(Path.resolve('./', 'lib/swagmock/lib'));
var apiPath = Path.resolve('./', 'config/openapi.yaml');
var mockgen;
module.exports = function () {
    /**
     * Cached mock generator
     */
    mockgen = mockgen || Swagmock(apiPath);
    return mockgen;
};
