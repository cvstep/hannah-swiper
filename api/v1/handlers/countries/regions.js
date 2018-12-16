'use strict';
var dataProvider = require('../../data/countries/regions.js');
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
     */
    get: function getCountryRegions(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
