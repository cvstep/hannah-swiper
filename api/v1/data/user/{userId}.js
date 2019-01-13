'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: getUserData
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            //callback(false, {t:"fk"});
            //returnb
            Mockgen().responses({
                path: '/user/{userId}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            return {}
            Mockgen().responses({
                path: '/user/{userId}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update user data by userId
     * description:
     * parameters: userId, userForm
     * produces: application/json
     * responses: 200
     * operationId: updateUserData
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
