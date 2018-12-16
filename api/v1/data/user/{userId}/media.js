'use strict';
var Mockgen = require('../../mockgen.js');
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
     * operationId: postUserMedia
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}/media',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}/media',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Gets media for user.
     * description: 
     * parameters: userId
     * produces: application/json
     * responses: 200, default
     * operationId: getUserMedia
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}/media',
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
                path: '/user/{userId}/media',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
