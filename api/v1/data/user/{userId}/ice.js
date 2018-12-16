'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /user/{userId}/ice
 */
module.exports = {
    /**
     * summary: Get ICE form data by userId
     * description: 
     * parameters: userId
     * produces: application/json
     * responses: 200, default
     * operationId: getICEForm
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}/ice',
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
                path: '/user/{userId}/ice',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
