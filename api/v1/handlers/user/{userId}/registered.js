'use strict';
var dataProvider = require('../../../data/user/{userId}/registered.js');
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
     */
    get: function getRegistereduser(req, res, next) {
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
