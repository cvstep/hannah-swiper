'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /countries
 */
module.exports = {
    /**
     * summary: Get list of countries and country codes
     * description: This function returns the list of countries and country codes

     * parameters: 
     * produces: application/json
     * responses: 200, default
     * operationId: getCountries
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/countries',
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
                path: '/countries',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
