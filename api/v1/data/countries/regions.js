'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /countries/regions
 */
module.exports = {
    /**
     * summary: Get list of country regions
     * description: This function returns the list of countries and regions

     * parameters: countryCode
     * produces: application/json
     * responses: 200, default
     * operationId: getCountryRegions
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/countries/regions',
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
                path: '/countries/regions',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
