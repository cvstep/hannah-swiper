'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /user/{userId}/password
 */
module.exports = {
    /**
     * summary: Update user password by userId
     * description: 
     * parameters: userId, userPasswordForm
     * produces: application/json
     * responses: 200
     * operationId: putPassword
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}/password',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
