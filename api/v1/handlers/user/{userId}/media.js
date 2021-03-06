'use strict';
var dataProvider = require('../../../data/user/{userId}/media.js');
/**
 * Operations on /user/{userId}/media
 */
module.exports = {
    /**
     * summary: Uploads media for user.
     * description: 
     * parameters: upimage, userId
     * produces: 
     * responses: 200, default
     */
    post: function postUserMedia(req, res, next) {
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
     * summary: Gets media for user.
     * description: 
     * parameters: userId
     * produces: application/json
     * responses: 200, default
     */
    get: function getUserMedia(req, res, next) {
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
