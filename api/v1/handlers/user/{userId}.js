'use strict';
var dataProvider = require('../../data/user/{userId}.js');
/**
 * Operations on /user/{userId}
 */
module.exports = {
    /**
     * summary: Get User data by userId
     * description: 
     * parameters: userId
     * produces: application/json
     * responses: 200, default
     */
    get: function getUserData(req, res, next) {
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
    },
    /**
     * summary: Update user data by userId
     * description: 
     * parameters: userId, userForm
     * produces: application/json
     * responses: 200
     */
    put: function updateUserData(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
