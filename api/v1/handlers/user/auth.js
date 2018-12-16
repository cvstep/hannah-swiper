'use strict';
var dataProvider = require('../../data/user/auth.js');
/**
 * Operations on /user/auth
 */
module.exports = {
    /**
     * summary: Login user by userinfo and password
     * description: Log the user on and returns the apiKey.
     * parameters: logonForm
     * produces: application/json
     * responses: 200
     */
    post: function authorize(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Get userId by apiKey
     * description: This function is designed to be used to logon users from links in emails or other marketing materials. It is rather unsafe, but is included for historical reasons.
     * parameters: 
     * produces: application/json
     * responses: 200
     */
    get: function getPIdByapiKey(req, res, next) {
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
