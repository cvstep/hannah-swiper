'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /states
 */
module.exports = {
    /**
     * summary: Get list of states
     * description: This function returns the list of states
webinars

     * parameters:
     * produces: application/json
     * responses: 200, default
     * operationId: getStates
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */

            Mockgen().responses({
                path: '/status',
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
                path: '/states',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
