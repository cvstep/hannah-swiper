'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /user
 */
module.exports = {
    /**
     * summary: Create new user
     * description: Creates new user. Perform necessary business operations like sending welcome email.

     * parameters: userForm
     * produces: application/json
     * responses: 200, default
     * operationId: createuser
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user',
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
                path: '/user',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
