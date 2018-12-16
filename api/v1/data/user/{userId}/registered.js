'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /user/{userId}/registered
 */
module.exports = {
    /**
     * summary: Get registered user by userId
     * description: 
     * parameters: userId
     * produces: application/json
     * responses: 200, default
     * operationId: getRegistereduser
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}/registered',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}/registered',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
