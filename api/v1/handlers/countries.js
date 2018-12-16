'use strict';
var dataProvider = require('../data/countries.js');
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
     */
    get: function getCountries(req, res, next) {
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
