'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /user/{userId}/orders
 */
module.exports = {
    /**
     * summary: Create new order for userId
     * description: It includes the products ordered, the user data for
the product, if required. It also sends the payment, billing
and/or shipping information.

     * parameters: userId, orderData
     * produces: application/json
     * responses: 200, default
     * operationId: postOrder
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userId}/orders',
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
                path: '/user/{userId}/orders',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
